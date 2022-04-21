import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

export default function PrivateRoute({ children, ...routeProps }) {
  const { userInput } = useUser();
  return (
    <>
      <Route
        {...routeProps}
        render={({ location }) =>
          !userInput ? (
            children
          ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
