import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });

  test('Should render accessibility guidelines (AXE)', async () => {
    const { container } = render(<App />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
