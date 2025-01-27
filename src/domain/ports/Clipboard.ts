export interface Clipboard {
  copy(text: string): Promise<void>;
}
