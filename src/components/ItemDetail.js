import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { getFirestore } from "../firebase";
import Counter from "./Counter";

const FROM = 1;

const ItemDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { addItem, items } = useContext(CartContext);

  console.log("items", items);

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [disabledAddToCart, setDisabledAddToCart] = useState(false);

  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("items"));
    // const item = items.find(({ item }) => Number(item.id) === Number(id));
    // setItem(item);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const currentItem = itemCollection.doc(id);

    // Call to document
    currentItem.get().then((document) => {
      if (!document.exists) {
        console.log("No item");
        return;
      }
      setItem({ id: document.id, ...document.data() });
    });
  }, [id]);

  useEffect(() => {
    if (items.length > 0 && item) {
      const isDisabled = items.some(
        (currentItem) => currentItem.item.id === item.id
      );
      setDisabledAddToCart(isDisabled);
    }
  }, [items, item]);

  if (!item) return <div>Loading...</div>;

  const handleItemToCart = () => {
    addItem({ item, quantity });
  };

  return (
    <div>
      ItemDetail
      <h4>Nombre: {item.title}</h4>
      <h4>Cantidad: {item.stock}</h4>
      <Counter
        counter={quantity}
        from={FROM}
        setCounter={setQuantity}
        to={item.stock}
      />
      <button disabled={disabledAddToCart} onClick={handleItemToCart}>
        Agregar al carrito
      </button>
      <button onClick={() => history.goBack()}>Regresar atrás</button>
    </div>
  );
};

export default ItemDetail;
