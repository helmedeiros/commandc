import { describe, it, expect } from 'vitest';
import { FilterByCategory } from '../../src/application/FilterByCategory';
import { CATEGORIES } from '../../src/domain/Category';

describe('FilterByCategory', () => {
  const useCase = new FilterByCategory();

  it('returns entries for a valid category', () => {
    const result = useCase.execute('Popular');
    expect(result.length).toBeGreaterThan(0);
  });

  it('returns different entries for different categories', () => {
    const popular = useCase.execute('Popular');
    const math = useCase.execute('Math');
    expect(popular).not.toEqual(math);
  });

  it('returns entries for every known category', () => {
    for (const cat of CATEGORIES) {
      expect(useCase.execute(cat).length).toBeGreaterThan(0);
    }
  });
});
