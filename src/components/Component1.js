import React, { useState } from "react";
import LessIcon from "../icons/LessIcon";
import PlusIcon from "../icons/PlusIcon";
import Component2 from "./Component2";

const Component1 = () => {
  const [componentNumber, setComponentNumber] = useState(1);

  const subtractComponent = () => setComponentNumber(componentNumber - 1);

  const plusComponent = () => setComponentNumber(componentNumber + 1);

  return (
    <div>
      <h2>Component{componentNumber}</h2>
      <Component2
        componentNumber={componentNumber}
        setComponentNumber={setComponentNumber}
      />

      <h3>LessIcon</h3>
      <LessIcon className="iconButton" onAction={subtractComponent} />
      <h3>PlusIcon</h3>
      <PlusIcon className="iconButton" onClick={plusComponent} />
    </div>
  );
};

export default Component1;
