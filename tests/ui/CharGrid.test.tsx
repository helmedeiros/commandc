import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharGrid } from '../../src/ui/components/CharGrid';
import type { CharEntry } from '../../src/domain/CharEntry';

const ENTRIES: CharEntry[] = [
  { char: '\u00A9', name: 'Copyright' },
  { char: '\u00AE', name: 'Registered' },
  { char: '\u2122', name: 'Trademark' },
];

describe('CharGrid', () => {
  it('renders all entries as cells', () => {
    render(<CharGrid entries={ENTRIES} onCopy={() => {}} />);
    expect(screen.getByText('\u00A9')).toBeInTheDocument();
    expect(screen.getByText('\u00AE')).toBeInTheDocument();
    expect(screen.getByText('\u2122')).toBeInTheDocument();
  });

  it('calls onCopy with the character when a cell is clicked', () => {
    const onCopy = vi.fn();
    render(<CharGrid entries={ENTRIES} onCopy={onCopy} />);
    fireEvent.click(screen.getByText('\u00AE'));
    expect(onCopy).toHaveBeenCalledWith('\u00AE');
  });

  it('renders empty when no entries', () => {
    const { container } = render(<CharGrid entries={[]} onCopy={() => {}} />);
    expect(container.querySelectorAll('.char-cell')).toHaveLength(0);
  });
});
