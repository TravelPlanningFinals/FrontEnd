import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  return (
    <>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
