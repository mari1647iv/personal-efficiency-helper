import { render, screen } from '@testing-library/react';
import App from './App';

test('renders timer in pause state', () => {
  render(<App />);
  const timerPauseElement = screen.getByText(/rest./i);
  expect(timerPauseElement).toBeInTheDocument();
});
