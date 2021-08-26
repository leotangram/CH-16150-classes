import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState(null);

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

  console.log("item", item);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      ItemDetail
      <h4>Nombre: {item.title}</h4>
      <h4>Cantidad: {item.stock}</h4>
      <button onClick={() => history.goBack()}>Regresar atrás</button>
    </div>
  );
};

export default ItemDetail;
