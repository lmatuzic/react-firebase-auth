import { Route, Redirect, RouteProps } from "react-router";
import { LOGIN_PAGE } from "./urls";

interface PrivateRoute extends RouteProps {
  isAuthenticated: boolean | undefined;
}

const PrivateRoute = ({ isAuthenticated, ...routeProps }: PrivateRoute) => {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={LOGIN_PAGE} />;
};

export default PrivateRoute;
