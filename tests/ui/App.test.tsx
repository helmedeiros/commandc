import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../../src/ui/App';
import { InMemoryClipboard } from '../../src/adapters/InMemoryClipboard';

describe('App', () => {
  it('renders header with logo', () => {
    render(<App clipboard={new InMemoryClipboard()} />);
    expect(screen.getByText(/\+C/)).toBeInTheDocument();
  });

  it('renders category tabs', () => {
    render(<App clipboard={new InMemoryClipboard()} />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByText('Math')).toBeInTheDocument();
  });

  it('shows Popular characters by default', () => {
    render(<App clipboard={new InMemoryClipboard()} />);
    // Copyright is in Popular
    expect(screen.getByTitle('Copyright')).toBeInTheDocument();
  });

  it('switches category when tab is clicked', () => {
    render(<App clipboard={new InMemoryClipboard()} />);
    fireEvent.click(screen.getByText('Arrows'));
    expect(screen.getByTitle('Left')).toBeInTheDocument();
  });

  it('copies character to clipboard on cell click', async () => {
    const clipboard = new InMemoryClipboard();
    render(<App clipboard={clipboard} />);
    fireEvent.click(screen.getByTitle('Copyright'));
    // Wait for async copy
    await vi.waitFor(() => {
      expect(clipboard.lastCopied).toBe('\u00A9');
    });
  });

  it('filters by search query', () => {
    render(<App clipboard={new InMemoryClipboard()} />);
    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'copyright' } });
    expect(screen.getByTitle('Copyright')).toBeInTheDocument();
  });
});
