import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShortcutsPanel } from '../../src/ui/components/ShortcutsPanel';

function openPanel() {
  render(<ShortcutsPanel />);
  fireEvent.click(screen.getByLabelText('Show keyboard shortcuts'));
}

describe('ShortcutsPanel', () => {
  it('is hidden by default', () => {
    render(<ShortcutsPanel />);
    expect(screen.queryByText('Keyboard Shortcuts')).toBeNull();
  });

  it('opens on toggle click and shows all shortcuts', () => {
    openPanel();
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
    expect(screen.getByText('Copy character to clipboard')).toBeInTheDocument();
    expect(screen.getByText('Focus search')).toBeInTheDocument();
    expect(screen.getByText('Clear search and blur')).toBeInTheDocument();
    expect(screen.getByText('Navigate categories')).toBeInTheDocument();
  });

  it('renders key badges when open', () => {
    openPanel();
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('Esc')).toBeInTheDocument();
    expect(screen.getByText('Click')).toBeInTheDocument();
  });

  it('hides when toggle is clicked again', () => {
    openPanel();
    fireEvent.click(screen.getByLabelText('Hide keyboard shortcuts'));
    expect(screen.queryByText('Keyboard Shortcuts')).toBeNull();
  });
});
