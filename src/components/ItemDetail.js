import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const ItemDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    const item = items.find(({ item }) => Number(item.id) === Number(id));
    setItem(item);
  }, [id]);

  console.log("item", item);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      ItemDetail
      <h4>Nombre: {item.item.name}</h4>
      <h4>Cantidad: {item.quantity}</h4>
      <button onClick={() => history.goBack()}>Regresar atrás</button>
    </div>
  );
};

export default ItemDetail;
