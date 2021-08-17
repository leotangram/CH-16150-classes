import React, { useState } from "react";

const ReviewExerciceClass09 = () => {
  const [keyTotal, setKeyTotal] = useState({ key: "", keyCode: "" });

  const handleChange = (event) => {
    const vocales = ["a", "e", "i", "o", "u"];
    console.log(event.key);

    if (vocales.includes(event.key)) {
      event.preventDefault();
    } else {
      console.log(event);
      setKeyTotal({ ...keyTotal, [event.target.name]: event.target.value });
    }
  };

  return (
    <div>
      <label>
        <input
          type="text"
          name="key"
          onKeyDown={handleChange}
          onChange={handleChange}
          value={keyTotal.key}
        />
      </label>

      <p>{keyTotal.key}</p>
    </div>
  );
};

export default ReviewExerciceClass09;
