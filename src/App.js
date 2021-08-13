import React, { useEffect, useState } from "react";
import "./App.css";
import { task } from "./helpers/callsToPromise";
import Router from "./router/Router";

const App = () => {
  const [responseType, setResponseType] = useState("");

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    try {
      const respone = await task();
      console.log("Todo bien", respone);
      setResponseType("success");
    } catch (error) {
      console.log("Todo mal", error);
      setResponseType("error");
    }
  };

  return (
    <div className="app-container">
      <Router />
      <p>{responseType}</p>
    </div>
  );
};

export default App;
