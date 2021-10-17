import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { UserData } from "../model/user";
import { signInWithEmailAndPassword } from "firebase/auth";
import { DASHBOARD, SIGNUP_PAGE } from "../router/urls";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  } as UserData);

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const login = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setUser(result);
      history.push(DASHBOARD);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="Enter your Email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Enter your Password"
          autoComplete="on"
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Login</button>
        <p>Not logged in yet?</p>

        <button onClick={() => history.push(SIGNUP_PAGE)}>SignUp</button>
      </form>
    </div>
  );
};

export default Login;
