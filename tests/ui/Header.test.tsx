import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../../src/ui/components/Header';

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header query="" onQueryChange={() => {}} />);
    expect(screen.getByText(/\+C/)).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<Header query="" onQueryChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays the current query value', () => {
    render(<Header query="arrow" onQueryChange={() => {}} />);
    expect(screen.getByDisplayValue('arrow')).toBeInTheDocument();
  });
});
