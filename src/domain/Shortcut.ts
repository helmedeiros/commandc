export interface Shortcut {
  readonly keys: readonly string[];
  readonly description: string;
}

export const SHORTCUTS: readonly Shortcut[] = [
  { keys: ['Click'], description: 'Copy character to clipboard' },
  { keys: ['/'], description: 'Focus search' },
  { keys: ['Esc'], description: 'Clear search and blur' },
  { keys: ['\u2190', '\u2192'], description: 'Navigate categories' },
];
