import { useDispatch } from "react-redux";
import { login, logout } from "../feature/user";

export const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        name: "Ricardo",
        age: 34,
        email: "ricardo.jucrist@hotmail.com"
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
