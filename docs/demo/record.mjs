import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { preview } from 'vite';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const port = Number(process.env.DEMO_PORT ?? 4110);
const url = `http://localhost:${port}/`;
const viewport = { width: 1100, height: 660 };

const cursorScript = `
  window.addEventListener('DOMContentLoaded', () => {
    const dot = document.createElement('div');
    dot.style.cssText = 'position:fixed;left:-40px;top:-40px;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;border:2px solid rgba(255,255,255,0.9);box-sizing:border-box;background:rgba(255,255,255,0.12);box-shadow:0 0 0 2px rgba(0,0,0,0.4);pointer-events:none;z-index:99999;transition:transform 120ms';
    document.body.appendChild(dot);
    window.addEventListener('mousemove', (e) => { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; });
    window.addEventListener('mousedown', () => { dot.style.transform = 'scale(0.7)'; });
    window.addEventListener('mouseup', () => { dot.style.transform = 'scale(1)'; });
  });
`;

const pause = (page, ms) => page.waitForTimeout(ms);

async function moveTo(page, locator) {
  const box = await locator.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 25 });
}

async function clickOn(page, locator) {
  await moveTo(page, locator);
  await pause(page, 300);
  await locator.click();
}

async function typeSlowly(page, text) {
  await page.keyboard.type(text, { delay: 150 });
}

const scenes = {
  async 'browse-and-copy'(page) {
    await page.mouse.move(550, 600);
    await pause(page, 1500);
    await clickOn(page, page.getByRole('button', { name: 'Copy Copyright' }));
    await pause(page, 1800);
    await clickOn(page, page.locator('.category-tab', { hasText: 'Math' }));
    await pause(page, 1500);
    await clickOn(page, page.locator('.char-cell', { hasText: '∞' }));
    await pause(page, 1800);
    await page.mouse.move(550, 620, { steps: 20 });
    for (let i = 0; i < 2; i++) {
      await page.keyboard.press('ArrowRight');
      await pause(page, 1100);
    }
    await clickOn(page, page.locator('.char-cell', { hasText: '€' }).first());
    await pause(page, 2000);
  },

  async search(page) {
    await page.mouse.move(-10, -10);
    await pause(page, 1000);
    await page.keyboard.press('/');
    await pause(page, 400);
    await typeSlowly(page, 'hart');
    await pause(page, 1500);
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('Backspace');
      await pause(page, 200);
    }
    await typeSlowly(page, 'eart');
    await pause(page, 1500);
    await clickOn(page, page.locator('.char-cell').first());
    await pause(page, 1500);
    await page.locator('.search-input').click();
    await page.keyboard.press('Escape');
    await pause(page, 400);
    await page.keyboard.press('/');
    await typeSlowly(page, 'arrow');
    await pause(page, 1500);
    await clickOn(page, page.locator('.char-cell').nth(3));
    await pause(page, 1500);
    await page.locator('.search-input').click();
    await page.keyboard.press('Escape');
    await pause(page, 1500);
  },

  async shortcuts(page) {
    await page.mouse.move(-10, -10);
    await pause(page, 1500);
    await page.keyboard.press('?');
    await pause(page, 2500);
    await page.keyboard.press('?');
    await pause(page, 1200);
    await clickOn(page, page.locator('.shortcuts-toggle'));
    await pause(page, 2500);
    await clickOn(page, page.locator('.shortcuts-toggle'));
    await pause(page, 1500);
  },
};

function toGif(video, offsetSeconds, out) {
  execFileSync('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-ss', offsetSeconds.toFixed(2),
    '-i', video,
    '-vf', 'fps=12,scale=900:-1:flags=lanczos,split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle',
    out,
  ]);
}

const server = await preview({ root, preview: { port, strictPort: true, open: false } });
const browser = await chromium.launch();
const videoDir = mkdtempSync(join(tmpdir(), 'commandc-demo-'));
const only = process.argv.slice(2);

try {
  for (const [name, scene] of Object.entries(scenes)) {
    if (only.length > 0 && !only.includes(name)) continue;
    const context = await browser.newContext({
      viewport,
      colorScheme: 'dark',
      permissions: ['clipboard-read', 'clipboard-write'],
      recordVideo: { dir: videoDir, size: viewport },
    });
    const started = Date.now();
    await context.addInitScript(cursorScript);
    const page = await context.newPage();
    await page.goto(url);
    await page.locator('.char-cell').first().waitFor();
    await pause(page, 300);
    const offset = (Date.now() - started) / 1000;
    await scene(page);
    await context.close();
    toGif(await page.video().path(), offset, join(here, `${name}.gif`));
    console.log(`recorded docs/demo/${name}.gif`);
  }
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
  rmSync(videoDir, { recursive: true, force: true });
}
