import React from "react";
import { Link, useHistory } from "react-router-dom";

const id = 123;

const Home = () => {
  const history = useHistory();

  const goToCategory = () => history.push(`/categories/${id}`);

  return (
    <div>
      <h1>Hola people!</h1>
      <button onClick={goToCategory}>Go to Category</button>
      <Link to="counter">Counter</Link>
    </div>
  );
};

export default Home;
