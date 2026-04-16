import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShortcutsPanel } from '../../src/ui/components/ShortcutsPanel';

describe('ShortcutsPanel', () => {
  it('renders all shortcuts', () => {
    render(<ShortcutsPanel />);
    expect(screen.getByText('Copy character to clipboard')).toBeInTheDocument();
    expect(screen.getByText('Focus search')).toBeInTheDocument();
    expect(screen.getByText('Clear search and blur')).toBeInTheDocument();
    expect(screen.getByText('Navigate categories')).toBeInTheDocument();
  });

  it('renders key badges for each shortcut', () => {
    render(<ShortcutsPanel />);
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('Esc')).toBeInTheDocument();
    expect(screen.getByText('Click')).toBeInTheDocument();
  });

  it('is hidden by default and toggles on button click', () => {
    render(<ShortcutsPanel />);
    // Panel content should be hidden initially
    expect(screen.queryByText('Keyboard Shortcuts')).toBeNull();
    // Click the toggle button
    fireEvent.click(screen.getByLabelText('Show keyboard shortcuts'));
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
  });

  it('hides when toggle is clicked again', () => {
    render(<ShortcutsPanel />);
    const toggle = screen.getByLabelText('Show keyboard shortcuts');
    fireEvent.click(toggle);
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Hide keyboard shortcuts'));
    expect(screen.queryByText('Keyboard Shortcuts')).toBeNull();
  });
});
