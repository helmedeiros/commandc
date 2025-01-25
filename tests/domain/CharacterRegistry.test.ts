import { describe, it, expect } from 'vitest';
import { getAllCharacters, getByCategory } from '../../src/domain/CharacterRegistry';
import { CATEGORIES } from '../../src/domain/Category';

describe('CharacterRegistry', () => {
  describe('getAllCharacters', () => {
    it('returns a non-empty array', () => {
      expect(getAllCharacters().length).toBeGreaterThan(0);
    });

    it('has no duplicate characters across all categories', () => {
      const all = getAllCharacters();
      const chars = all.map((e) => e.char);
      expect(new Set(chars).size).toBe(chars.length);
    });

    it('every entry has a non-empty char and name', () => {
      for (const entry of getAllCharacters()) {
        expect(entry.char.length).toBeGreaterThan(0);
        expect(entry.name.length).toBeGreaterThan(0);
      }
    });
  });

  describe('getByCategory', () => {
    it('returns entries for each category', () => {
      for (const cat of CATEGORIES) {
        const entries = getByCategory(cat);
        expect(entries.length).toBeGreaterThan(0);
      }
    });

    it('returns only entries belonging to the requested category', () => {
      const popular = getByCategory('Popular');
      const math = getByCategory('Math');
      // Should be different sets
      expect(popular).not.toEqual(math);
    });

    it('returns empty for unknown category', () => {
      const entries = getByCategory('NonExistent' as never);
      expect(entries).toEqual([]);
    });
  });
});
