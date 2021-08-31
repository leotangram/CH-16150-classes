import React from "react";
import Button from "./Button";

const Counter = ({ counter, from, setCounter, to }) => {
  const addCounter = () => {
    if (to === counter) return;
    setCounter(counter + 1);
  };

  const subsCounter = () => {
    if (from === counter) return;
    setCounter(counter - 1);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Counter</h5>
        <div className="buttons-container">
          <Button action={subsCounter} text="-" />
          <span className="counter">{counter}</span>
          <Button action={addCounter} colorType="primary" text="+" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
