import React from "react";

const Button = ({ action, colorType, text }) => {
  const buttonColorType =
    colorType === "primary" ? "add-button" : "substract-button";

  return (
    <button
      type="button"
      className={`button ${buttonColorType}`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
