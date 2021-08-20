import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  // ClassComponent
  // const {item, children} = this.props
  //   this.props.item

  // --------------------------------------------------

  const [items, setItems] = useState([
    // { item: { id, name, color }, quantity: 8 },
  ]);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems([...items, item]);
    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ addItem, items }}>
      {children}
    </CartContext.Provider>
  );
};
