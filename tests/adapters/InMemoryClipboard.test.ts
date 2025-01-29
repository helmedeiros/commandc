import { describe, it, expect } from 'vitest';
import { InMemoryClipboard } from '../../src/adapters/InMemoryClipboard';

describe('InMemoryClipboard', () => {
  it('starts with null content', () => {
    const clipboard = new InMemoryClipboard();
    expect(clipboard.lastCopied).toBeNull();
  });

  it('stores the copied text', async () => {
    const clipboard = new InMemoryClipboard();
    await clipboard.copy('\u00A9');
    expect(clipboard.lastCopied).toBe('\u00A9');
  });

  it('overwrites on subsequent copy', async () => {
    const clipboard = new InMemoryClipboard();
    await clipboard.copy('A');
    await clipboard.copy('B');
    expect(clipboard.lastCopied).toBe('B');
  });
});
