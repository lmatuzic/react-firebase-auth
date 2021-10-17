import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard, Home, Login, Signup } from "../pages";
import { DASHBOARD, HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from "../router/urls";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={HOME_PAGE} component={Home} />
      <Route exact path={LOGIN_PAGE} component={Login} />
      <Route exact path={SIGNUP_PAGE} component={Signup} />
      <Route exact path={DASHBOARD} component={Dashboard} />
    </BrowserRouter>
  );
};

export default Router;
