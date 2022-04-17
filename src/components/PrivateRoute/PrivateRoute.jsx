import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user, loading } = useUser();

  return (
    <Route {...routeProps}>
      {!loading && !user ? <Redirect to="/" /> : children}
    </Route>
  );
}
