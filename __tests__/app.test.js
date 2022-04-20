import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import Header from '../src/components/Header/Header';
import { TripProvider } from '../src/context/TripProvider';
import { UserProvider } from '../src/context/UserProvider';
import Login from '../src/views/Auth/Login';

test('Renders landing page/login loads', () => {
  const container = render(
    // <BrowserRouter>
    //   <Header>
    //     <main>
    //       <UserProvider>
    //         <TripProvider>
    <App />
    //         </TripProvider>
    //       </UserProvider>
    //     </main>
    //   </Header>
    // </BrowserRouter>
  );

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
