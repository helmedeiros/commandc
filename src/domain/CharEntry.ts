export interface CharEntry {
  readonly char: string;
  readonly name: string;
}

export function createCharEntry(char: string, name: string): CharEntry {
  if (char.length === 0) {
    throw new Error('Character must not be empty');
  }
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    throw new Error('Name must not be empty');
  }
  return { char, name: trimmed };
}
