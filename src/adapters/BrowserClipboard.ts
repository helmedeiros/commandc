import type { Clipboard } from '../domain/ports/Clipboard';

export class BrowserClipboard implements Clipboard {
  async copy(text: string): Promise<void> {
    await navigator.clipboard.writeText(text);
  }
}
