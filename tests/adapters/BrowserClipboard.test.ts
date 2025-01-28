import { describe, it, expect, vi } from 'vitest';
import { BrowserClipboard } from '../../src/adapters/BrowserClipboard';

describe('BrowserClipboard', () => {
  it('calls navigator.clipboard.writeText with the character', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    const clipboard = new BrowserClipboard();
    await clipboard.copy('\u00A9');

    expect(writeText).toHaveBeenCalledWith('\u00A9');
  });

  it('propagates errors from writeText', async () => {
    const writeText = vi.fn().mockRejectedValue(new Error('denied'));
    Object.assign(navigator, { clipboard: { writeText } });

    const clipboard = new BrowserClipboard();
    await expect(clipboard.copy('x')).rejects.toThrow('denied');
  });
});
