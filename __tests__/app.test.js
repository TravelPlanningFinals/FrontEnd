import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import { UserProvider } from '../src/context/UserProvider';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Trips from '../src/views/Trips/Trips';
import { TripProvider } from '../src/context/TripProvider';
import mockData from '../src/utils/mockData';

const user = {
  avatar: 'filler',
  email: null,
  exp: 123456219731,
  iat: 2136791232,
  id: '1',
  username: 'test user',
};
const tripsData = mockData;

// OAuth attempeted Mock
// const server = setupServer(
//   rest.get(`http://localhost:7890/api/v1/users`, (req, res, ctx) => {
//     const select = req.url.searchParams.get('select');
//     if (select === '*') {
//       return res(ctx.json([user]));
//     }
//     return res(ctx.status(500));
//   })
// );

// trips mock
const server = setupServer(
  rest.get(
    `https://traveltrialapp.herokuapp.com/api/v1/trips`,
    (req, res, ctx) => {
      const select = req.url.searchParams.get('select');
      if (select === '*') {
        return res(ctx.json([tripsData]));
      }
      return res(ctx.status(500));
    }
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

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

test.skip('trips page', async () => {
  server.use(
    rest.get(
      `https://traveltrialapp.herokuapp.com/api/v1/trips
    `,
      (req, res, ctx) => {
        const select = req.url.searchParams.get('select');
        if (select === '*') {
          return res(ctx.json([tripsData]));
        }
        return res(ctx.status(500));
      }
    )
  );

  const container = render(
    <BrowserRouter>
      <UserProvider>
        <TripProvider>
          <MemoryRouter>
            <Trips />
          </MemoryRouter>
        </TripProvider>
      </UserProvider>
    </BrowserRouter>
  );

  const input = await screen.findByRole('textbox', { name: /location/i });
  // const input = screen.getByPlaceholderText(/location/i);
  const planBtn = await screen.findByRole('button', {
    name: /plan your trip/i,
  });

  expect(input).toBeInTheDocument();
  expect(planBtn).toBeInTheDocument();
});
