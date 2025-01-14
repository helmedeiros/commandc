import { describe, it, expect } from 'vitest';
import { createCharEntry } from '../../src/domain/CharEntry';

describe('createCharEntry', () => {
  it('creates entry with correct fields', () => {
    const entry = createCharEntry('\u00A9', 'Copyright');
    expect(entry.char).toBe('\u00A9');
    expect(entry.name).toBe('Copyright');
  });

  it('trims whitespace from name', () => {
    const entry = createCharEntry('\u00AE', '  Registered  ');
    expect(entry.name).toBe('Registered');
  });

  it('rejects empty char', () => {
    expect(() => createCharEntry('', 'Empty')).toThrow();
  });

  it('rejects empty name', () => {
    expect(() => createCharEntry('\u00A9', '')).toThrow();
  });

  it('rejects whitespace-only name', () => {
    expect(() => createCharEntry('\u00A9', '   ')).toThrow();
  });

  it('allows multi-codepoint characters', () => {
    const entry = createCharEntry('\uD83D\uDE00', 'Grinning Face');
    expect(entry.char).toBe('\uD83D\uDE00');
    expect(entry.name).toBe('Grinning Face');
  });
});
