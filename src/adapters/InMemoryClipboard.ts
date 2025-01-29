import type { Clipboard } from '../domain/ports/Clipboard';

export class InMemoryClipboard implements Clipboard {
  lastCopied: string | null = null;

  async copy(text: string): Promise<void> {
    this.lastCopied = text;
  }
}
