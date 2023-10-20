import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders Vite + React heading', async () => {
    render(<App />);
    const heading = screen.getByText('Vite + React');
    expect(heading).toBeDefined()
  });

  it('renders button with initial count', async () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});