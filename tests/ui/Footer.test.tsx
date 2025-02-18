import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../src/ui/components/Footer';

describe('Footer', () => {
  it('shows keyboard shortcut hint', () => {
    render(<Footer />);
    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('shows copy instruction', () => {
    render(<Footer />);
    expect(screen.getByText(/Click any character/)).toBeInTheDocument();
  });
});
