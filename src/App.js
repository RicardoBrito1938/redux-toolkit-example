import "./App.css";
import { ChangeColorComponent } from "./components/ChangeColorComponent";
import { FavoritePokemon } from "./components/FavoritePokemon";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColorComponent />
      <FavoritePokemon />
    </div>
  );
}

export default App;
