import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders landing page', () => {
  render(<App />);
  const headerElement = screen.getByText(/trips/i);
  expect(headerElement).toBeInTheDocument();
});
