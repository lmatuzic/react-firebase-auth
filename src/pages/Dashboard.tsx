import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { LOGIN_PAGE } from "../router/urls";

const Dashboard = () => {
  const history = useHistory();

  const signOut = (event: any) => {
    event.preventDefault();
    auth.signOut();
    history.push(LOGIN_PAGE);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <h2>Welcome to Dashboard!</h2>
      <br />
      <br />
      <button onClick={() => signOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
