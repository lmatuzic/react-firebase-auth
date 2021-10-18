import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard, Home, Login, Signup } from "../pages";
import { DASHBOARD, HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from "../router/urls";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Route exact path={HOME_PAGE} component={Home} />
      <Route exact path={LOGIN_PAGE} component={Login} />
      <Route exact path={SIGNUP_PAGE} component={Signup} />
      <PrivateRoute
        path={DASHBOARD}
        isAuthenticated={authenticated}
        component={Dashboard}
      />
    </BrowserRouter>
  );
};

export default Router;
