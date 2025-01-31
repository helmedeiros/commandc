import { describe, it, expect } from 'vitest';
import { CopyCharacter } from '../../src/application/CopyCharacter';
import { InMemoryClipboard } from '../../src/adapters/InMemoryClipboard';
import { FakeNotifier } from '../../src/adapters/FakeNotifier';

describe('CopyCharacter', () => {
  it('copies the character to clipboard and notifies', async () => {
    const clipboard = new InMemoryClipboard();
    const notifier = new FakeNotifier();
    const useCase = new CopyCharacter(clipboard, notifier);

    await useCase.execute('\u00A9');

    expect(clipboard.lastCopied).toBe('\u00A9');
    expect(notifier.messages).toEqual(['Copied \u00A9']);
  });

  it('notifies with error message on clipboard failure', async () => {
    const clipboard = new InMemoryClipboard();
    clipboard.copy = async () => { throw new Error('denied'); };
    const notifier = new FakeNotifier();
    const useCase = new CopyCharacter(clipboard, notifier);

    await useCase.execute('X');

    expect(notifier.messages).toEqual(['Failed to copy']);
  });

  it('copies different characters', async () => {
    const clipboard = new InMemoryClipboard();
    const notifier = new FakeNotifier();
    const useCase = new CopyCharacter(clipboard, notifier);

    await useCase.execute('\u2605');

    expect(clipboard.lastCopied).toBe('\u2605');
    expect(notifier.messages[0]).toContain('\u2605');
  });
});
