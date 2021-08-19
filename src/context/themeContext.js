import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ defaultValue = false, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [items, setItems] = useState([
    // {item: {id, name, color}, quantity: 8},
    // {item: {id, name, color}, quantity: 8},
  ]);

  const handleTheme = () => setIsDarkMode(!isDarkMode);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems([...items, item]);
    setItems(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const clearAllItems = () => setItems([]);

  return (
    <ThemeContext.Provider
      value={{ handleTheme, removeItem, clearAllItems, isDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
