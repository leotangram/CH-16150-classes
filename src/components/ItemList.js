import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";

const itemId = "AgWW37qbWOnfGwyPrMvZ";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [itemsWidthHighPrice, setItemsWidthHighPrice] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("items", items);
  console.log("item", item);
  console.log("itemsWidthHighPrice", itemsWidthHighPrice);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const currentItem = itemCollection.doc(itemId);
    const highPrice = itemCollection.where("price", ">", 3000000);

    // Call to collection
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
        }
        setItems(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    // Call with filters
    highPrice
      .get()
      .then((querySnapshot) =>
        setItemsWidthHighPrice(
          querySnapshot.docs.map((document) => document.data())
        )
      )
      .catch((error) => console.log("error, error"));
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - catidad: {item.stock}
            <Link to={`/product/${item.id}`}>Go to detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

// https://firebase.googleblog.com/2021/07/introducing-the-new-firebase-js-sdk.html

// https://firebase.google.com/docs/web/setup?hl=es&sdk_version=v9#add-sdks-initialize
