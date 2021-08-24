import React, { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";
import { CartContext } from "./context/cartContext";
import { ThemeProvider } from "./context/themeContext";
import Router from "./router/Router";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="app-container">
      <ThemeProvider>
        <CartContext.Provider value={cart}>
          <Component1 />
        </CartContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
