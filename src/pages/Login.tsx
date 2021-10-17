import { SIGNUP_PAGE } from "../router/urls";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  return (
    <>
      <div>Login</div>
      {/* <button onClick={() => loginWithGoogle()}>Google sign in</button> */}
      <button onClick={() => history.push(SIGNUP_PAGE)}>Go to signup</button>
    </>
  );
};

export default Login;
