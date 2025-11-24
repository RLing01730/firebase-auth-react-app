import { render, screen } from '@testing-library/react';
import App from './App';

test('renders firebase auth app', () => {
  render(<App />);
  const heading = screen.getByText(/Firebase Authentication/i);
  expect(heading).toBeInTheDocument();
});
