import React, { Fragment, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { CartContext } from "../context/cartContext";
import { getFirestore } from "../firebase";

const Cart = () => {
  const { items } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);

  useEffect(() => {
    if (items.length > 0) {
      let currentTotal = 0;
      items.forEach(({ item, quantity }) => {
        currentTotal += item.price * quantity;
      });
      setTotal(currentTotal);
    }
  }, [items]);

  console.log("items", items);

  const handleFinishPurchase = () => {
    const newItems = items.map(({ item, quantity }) => ({
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
      },
      quantity,
    }));
    console.log("newItems", newItems);
    const newOrder = {
      buyer: {
        name: "Leo",
        phone: "12345678910",
        email: "leo@leo.com",
      },
      items: newItems,
      total,
    };
    const db = getFirestore();
    const orders = db.collection("orders");
    // const docRef = db.collection("items").doc(items[0].item.id);
    const batch = db.batch();

    orders
      .add(newOrder)
      .then((response) => {
        console.log("response", response);
        // docRef.update({
        //   stock: items[0].item.stock - items[0].quantity,
        // });
        items.forEach(({ item, quantity }) => {
          const docRef = db.collection("items").doc(item.id);
          batch.update(docRef, { stock: item.stock - quantity });
        });
        batch.commit();
        setOrderCreatedId(response.id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map(({ item, quantity }) => (
          <li>
            {item.title} - cantidad: {quantity}
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <Fragment>
          <h2>
            Total:{" "}
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </h2>

          <button onClick={handleFinishPurchase}>Finalizar compra</button>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
