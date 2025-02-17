import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchStatus } from '../../src/ui/components/SearchStatus';

describe('SearchStatus', () => {
  it('shows count and query when searching', () => {
    render(<SearchStatus query="arrow" count={5} />);
    expect(screen.getByText(/5 results/)).toBeInTheDocument();
  });

  it('returns null for empty query', () => {
    const { container } = render(<SearchStatus query="" count={0} />);
    expect(container.innerHTML).toBe('');
  });

  it('uses singular for count 1', () => {
    render(<SearchStatus query="pi" count={1} />);
    expect(screen.getByText(/1 result for/)).toBeInTheDocument();
  });
});
