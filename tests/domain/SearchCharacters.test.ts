import { describe, it, expect } from 'vitest';
import { searchCharacters } from '../../src/domain/SearchCharacters';
import type { CharEntry } from '../../src/domain/CharEntry';

const SAMPLE: readonly CharEntry[] = [
  { char: '\u2192', name: 'Right Arrow' },
  { char: '\u00A9', name: 'Copyright' },
  { char: '\u00B1', name: 'Plus Minus' },
  { char: '\u20AC', name: 'Euro' },
  { char: '\u03C0', name: 'Pi' },
];

describe('searchCharacters', () => {
  it('returns all entries for empty query', () => {
    expect(searchCharacters('', SAMPLE)).toEqual(SAMPLE);
  });

  it('matches by exact character', () => {
    const result = searchCharacters('\u03C0', SAMPLE);
    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe('Pi');
  });

  it('matches by name substring', () => {
    const result = searchCharacters('arrow', SAMPLE);
    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe('Right Arrow');
  });

  it('is case insensitive', () => {
    const result = searchCharacters('EURO', SAMPLE);
    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe('Euro');
  });

  it('returns empty for no matches', () => {
    expect(searchCharacters('zzzzz', SAMPLE)).toHaveLength(0);
  });

  it('trims whitespace from query', () => {
    const result = searchCharacters('  pi  ', SAMPLE);
    expect(result).toHaveLength(1);
  });

  it('matches partial name', () => {
    const result = searchCharacters('copy', SAMPLE);
    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe('Copyright');
  });

  it('matches multiple results', () => {
    const entries: CharEntry[] = [
      { char: 'A', name: 'Letter A' },
      { char: 'B', name: 'Letter B' },
      { char: 'C', name: 'Symbol C' },
    ];
    const result = searchCharacters('letter', entries);
    expect(result).toHaveLength(2);
  });
});

describe('searchCharacters special characters', () => {
  it('handles regex special chars in query safely', () => {
    const entries = [{ char: '+', name: 'Plus' }];
    const result = searchCharacters('plu', entries);
    expect(result).toHaveLength(1);
  });
});
