import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ThemeContext } from "../context/themeContext";

const Component2 = ({ componentNumber, setComponentNumber }) => {
  const { handleTheme, isDarkMode } = useContext(ThemeContext);
  const cart = useContext(CartContext);

  return (
    <div>
      <h2>Component2</h2>
      <h3>¿Tema oscuro?</h3>
      <p>{isDarkMode ? "Es tema oscuro" : "No es tema oscuro"}</p>
      <button onClick={handleTheme}>Cambiar tema</button>
      <p>Mi componente padre es el componente número {componentNumber}</p>
      <button onClick={() => setComponentNumber(componentNumber + 4)}>
        Ahora le voy a decir a mi padre que cambie su numero de componente
      </button>
    </div>
  );
};

export default Component2;
