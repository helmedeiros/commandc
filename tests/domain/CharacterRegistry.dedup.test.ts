import { describe, it, expect } from 'vitest';
import { getAllCharacters } from '../../src/domain/CharacterRegistry';

describe('CharacterRegistry dedup', () => {
  it('deduplicates characters shared across categories', () => {
    const all = getAllCharacters();
    const chars = all.map((e) => e.char);
    const unique = new Set(chars);
    expect(unique.size).toBe(chars.length);
  });

  it('total character count is reasonable', () => {
    const all = getAllCharacters();
    expect(all.length).toBeGreaterThan(200);
    expect(all.length).toBeLessThan(1000);
  });
});
