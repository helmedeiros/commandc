import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryTabs } from '../../src/ui/components/CategoryTabs';
import { CATEGORIES } from '../../src/domain/Category';

describe('CategoryTabs', () => {
  it('renders all category tabs', () => {
    render(<CategoryTabs active="Popular" onSelect={() => {}} />);
    for (const cat of CATEGORIES) {
      expect(screen.getByText(cat)).toBeInTheDocument();
    }
  });

  it('marks the active tab', () => {
    render(<CategoryTabs active="Math" onSelect={() => {}} />);
    const mathBtn = screen.getByText('Math');
    expect(mathBtn.className).toContain('active');
  });

  it('fires onSelect when a tab is clicked', () => {
    const onSelect = vi.fn();
    render(<CategoryTabs active="Popular" onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Arrows'));
    expect(onSelect).toHaveBeenCalledWith('Arrows');
  });
});
