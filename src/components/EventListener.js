import React, { useEffect, useState } from "react";
import { getWindowDimensions } from "../helpers/getWindowDimensions";

const EventListener = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const { height, width } = windowDimensions;

  console.log(windowDimensions);

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("Me voy a desaparecer... Bye");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h5>Tamaño de la pantalla</h5>
      <p>
        Alto: {height}, Ancho: {width}
      </p>
      {/* <button onClick={handleResize}>reset Size</button> */}
    </div>
  );
};

export default EventListener;
