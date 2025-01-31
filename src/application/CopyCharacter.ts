import type { Clipboard } from '../domain/ports/Clipboard';
import type { Notifier } from '../domain/ports/Notifier';

export class CopyCharacter {
  readonly clipboard: Clipboard;
  readonly notifier: Notifier;

  constructor(clipboard: Clipboard, notifier: Notifier) {
    this.clipboard = clipboard;
    this.notifier = notifier;
  }

  async execute(char: string): Promise<void> {
    try {
      await this.clipboard.copy(char);
      this.notifier.flash(`Copied ${char}`);
    } catch {
      this.notifier.flash('Failed to copy');
    }
  }
}
