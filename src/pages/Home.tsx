import { useHistory } from "react-router";
import { LOGIN_PAGE } from "../router/urls";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div>Home</div>
      <button onClick={() => history.push(LOGIN_PAGE)}>Go to login</button>
      <button>Sign out</button>
    </>
  );
};

export default Home;
