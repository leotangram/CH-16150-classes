import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const id = 123;

const Home = () => {
  const history = useHistory();

  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number === 3) {
      history.push("/cart");
    }
  }, [number]);

  const goToCategory = () => history.push(`/categories/${id}`);

  const sumNumber = () => setNumber(number + 1);

  return (
    <div>
      <h1>Hola people!</h1>
      <h2>{number}</h2>
      <button onClick={goToCategory}>Go to Category</button>
      <button onClick={sumNumber}>+</button>
      <Link to="counter">Counter</Link>
    </div>
  );
};

export default Home;
