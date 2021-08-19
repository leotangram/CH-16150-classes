import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
  const [componentNumber, setComponentNumber] = useState(1);

  return (
    <div>
      <h2>Component{componentNumber}</h2>
      <Component2
        componentNumber={componentNumber}
        setComponentNumber={setComponentNumber}
      />
    </div>
  );
};

export default Component1;
