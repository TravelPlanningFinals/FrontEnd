import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import { UserProvider } from '../src/context/UserProvider';
import userEvent from '@testing-library/user-event';

test('Renders landing page/login loads', () => {
  const container = render(<App />);

  const signInButton = screen.getByRole('button', { name: /sign in/i });
  const aboutUsLink = screen.getByRole('link', { name: /about us/i });
  const signOut = screen.getByRole('button', { name: /sign out/i });
  const tripsLink = screen.getByRole('link', { name: /back to your trips/i });

  expect(signInButton).toBeInTheDocument();
  expect(aboutUsLink).toBeInTheDocument();
  expect(signOut).toBeInTheDocument();
  expect(tripsLink).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test('About us Renders', () => {
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
