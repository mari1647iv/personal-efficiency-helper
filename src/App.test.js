import { render, screen } from '@testing-library/react';
import App from './App';

test('renders repo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/github repository/i);
  expect(linkElement).toBeInTheDocument();
});
