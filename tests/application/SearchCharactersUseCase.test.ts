import { describe, it, expect } from 'vitest';
import { SearchCharactersUseCase } from '../../src/application/SearchCharactersUseCase';

describe('SearchCharactersUseCase', () => {
  const useCase = new SearchCharactersUseCase();

  it('returns results matching query from all characters', () => {
    const result = useCase.execute('copyright');
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]?.name.toLowerCase()).toContain('copyright');
  });

  it('returns all characters for empty query', () => {
    const result = useCase.execute('');
    expect(result.length).toBeGreaterThan(100);
  });

  it('returns empty for no matches', () => {
    const result = useCase.execute('xyznonexistent');
    expect(result).toHaveLength(0);
  });
});
