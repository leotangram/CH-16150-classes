import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    item: {
      id: 1,
      name: "carro",
    },
    quantity: 8,
  },
  {
    item: {
      id: 2,
      name: "moto",
    },
    quantity: 5,
  },
  {
    item: {
      id: 3,
      name: "bicicleta",
    },
    quantity: 21,
  },
];

const ItemList = () => {
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <ul>
        {items.map(({ item, quantity }) => (
          <li key={item.id}>
            {item.name} - catidad: {quantity}
            <Link to={`/product/${item.id}`}>Go to detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
