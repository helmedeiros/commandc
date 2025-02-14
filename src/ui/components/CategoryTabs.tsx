import { CATEGORIES, type Category } from '../../domain/Category';
import { getByCategory } from '../../domain/CharacterRegistry';

export interface CategoryTabsProps {
  active: Category;
  onSelect: (category: Category) => void;
}

export function CategoryTabs({ active, onSelect }: CategoryTabsProps) {
  return (
    <nav className="category-tabs">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-tab${cat === active ? ' active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
          <span className="category-count">{getByCategory(cat).length}</span>
        </button>
      ))}
    </nav>
  );
}
