import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const authUser = { useUser };

  return (
      <Route {...routeProps}>
          {authUser.username ? children : <Redirect to='/' />}
      </Route>
  );
  )
}
