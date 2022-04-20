import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import { UserProvider } from '../src/context/UserProvider';
import userEvent from '@testing-library/user-event';

test.skip('About us Renders', () => {
  const container = render(
    <BrowserRouter>
      <UserProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </UserProvider>
    </BrowserRouter>
  );

  const aboutUsLink = screen.getByRole('link', { name: /about us/i });

  userEvent.click(aboutUsLink);

  const aboutUsHeader = screen.getByText(
    /meet the creators of travel app\.\.\.\.\.!/i
  );
  const img = screen.getByRole('img', { name: /libbi headshot/i });
  const gitHub = screen.getByRole('img', { name: /libbi headshot/i });
  const descrip = screen.getByRole('img', { name: /libbi headshot/i });

  expect(aboutUsHeader).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(gitHub).toBeInTheDocument();
  expect(descrip).toBeInTheDocument();
});
