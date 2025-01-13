import { describe, it, expect } from 'vitest';
import { CATEGORIES, type Category } from '../../src/domain/Category';

describe('Category', () => {
  it('has exactly 10 categories', () => {
    expect(CATEGORIES).toHaveLength(10);
  });

  it('contains all expected categories', () => {
    const expected: Category[] = [
      'Popular', 'Letters', 'Punctuation', 'Math', 'Numbers',
      'Currency', 'Symbols', 'Hieroglyphs', 'Arrows', 'Emoji',
    ];
    expect(CATEGORIES).toEqual(expected);
  });

  it('is readonly', () => {
    expect(Object.isFrozen(CATEGORIES)).toBe(true);
  });
});
