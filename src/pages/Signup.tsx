import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HOME_PAGE, LOGIN_PAGE } from "../router/urls";
import { auth } from "../firebase";
import { UserData } from "../model/user";

const Signup = () => {
  const { setUser } = useContext(AuthContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  } as UserData);
  const history = useHistory();

  const handleInputChange = (event: any) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const createAccount = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setUser(result);
      history.push(HOME_PAGE);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            autoComplete="on"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button onClick={createAccount} type="submit">
            Sign Up
          </button>

          <p>Already have account?</p>
          <button onClick={() => history.push(LOGIN_PAGE)}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
