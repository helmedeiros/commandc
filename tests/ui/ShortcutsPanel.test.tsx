import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShortcutsPanel } from '../../src/ui/components/ShortcutsPanel';

describe('ShortcutsPanel', () => {
  it('is hidden when open is false', () => {
    render(<ShortcutsPanel open={false} onToggle={() => {}} />);
    expect(screen.queryByText('Keyboard Shortcuts')).toBeNull();
  });

  it('shows all shortcuts when open', () => {
    render(<ShortcutsPanel open={true} onToggle={() => {}} />);
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
    expect(screen.getByText('Copy character to clipboard')).toBeInTheDocument();
    expect(screen.getByText('Focus search')).toBeInTheDocument();
    expect(screen.getByText('Clear search and blur')).toBeInTheDocument();
    expect(screen.getByText('Navigate categories')).toBeInTheDocument();
    expect(screen.getByText('Toggle shortcuts panel')).toBeInTheDocument();
  });

  it('renders key badges when open', () => {
    render(<ShortcutsPanel open={true} onToggle={() => {}} />);
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('Esc')).toBeInTheDocument();
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('calls onToggle when button is clicked', () => {
    const onToggle = vi.fn();
    render(<ShortcutsPanel open={false} onToggle={onToggle} />);
    fireEvent.click(screen.getByLabelText('Show keyboard shortcuts'));
    expect(onToggle).toHaveBeenCalledOnce();
  });
});
