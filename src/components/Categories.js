import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoryId } = useParams();
  console.log("categoryId", categoryId);

  return (
    <div>
      <h1>Categories</h1>
      <p>{categoryId}</p>
    </div>
  );
};

export default Categories;
