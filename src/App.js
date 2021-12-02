import "./App.css";
import { ChangeColorComponent } from "./components/ChangeColorComponent";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColorComponent />
    </div>
  );
}

export default App;
