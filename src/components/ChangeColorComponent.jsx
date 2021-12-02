import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../feature/theme";

export const ChangeColorComponent = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  const handleChangeColor = () => {
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input type="text" onChange={event => setColor(event.target.value)} />
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};
