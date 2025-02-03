import type { CharEntry } from '../domain/CharEntry';
import type { Category } from '../domain/Category';
import { getByCategory } from '../domain/CharacterRegistry';

export class FilterByCategory {
  execute(category: Category): readonly CharEntry[] {
    return getByCategory(category);
  }
}
