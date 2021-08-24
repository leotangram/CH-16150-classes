import React, { Fragment, useEffect, useState } from "react";
import LessIcon from "../icons/LessIcon";
import PlusIcon from "../icons/PlusIcon";
import Component2 from "./Component2";
import Loading from "./Loading";

const Component1 = () => {
  const [componentNumber, setComponentNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  console.log("Render Component1");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 2000);
  // }, []);

  const subtractComponent = () => setComponentNumber(componentNumber - 1);

  const plusComponent = () => setComponentNumber(componentNumber + 1);

  // Condition 1: If loading is true, show a loading message
  // if (loading) {
  //   return <h1>Cargando...</h1>;
  // }

  const config = loading
    ? {
        className: "green-text",
        title: "loading...",
      }
    : {
        className: "red-text",
        title: "loading...",
      };

  return (
    <Fragment>
      <button onClick={() => setLoading(!loading)}>Change Loading</button>
      <button onClick={() => setHideLoading(!hideLoading)}>Hide Loaging</button>
      {!hideLoading && <Loading {...config} loading={loading} />}
      {!loading && (
        <Fragment>
          <h2>Component{componentNumber}</h2>
          <Component2
            componentNumber={componentNumber}
            setComponentNumber={setComponentNumber}
          />

          <h3>LessIcon</h3>
          <LessIcon className="iconButton" onAction={subtractComponent} />
          <h3>PlusIcon</h3>
          <PlusIcon className="iconButton" onClick={plusComponent} />
        </Fragment>
      )}
    </Fragment>
    //   Condition 2: Inline with Fragment
    //   {/* {loading && <h1>Cargando...</h1>}
    //   {!loading && (
    //     <Fragment>
    //       <h2>Component{componentNumber}</h2>
    //       <Component2
    //         componentNumber={componentNumber}
    //         setComponentNumber={setComponentNumber}
    //       />

    //       <h3>LessIcon</h3>
    //       <LessIcon className="iconButton" onAction={subtractComponent} />
    //       <h3>PlusIcon</h3>
    //       <PlusIcon className="iconButton" onClick={plusComponent} />
    //     </Fragment>
    //   )} */}
    //   {/* Condition 3:  */}
    //   {loading ? (
    //     <h1>Cargando...</h1>
    //   ) : (
    //     <Fragment>
    //       <h2>Component{componentNumber}</h2>
    //       <Component2
    //         componentNumber={componentNumber}
    //         setComponentNumber={setComponentNumber}
    //       />

    //       <h3>LessIcon</h3>
    //       <LessIcon className="iconButton" onAction={subtractComponent} />
    //       <h3>PlusIcon</h3>
    //       <PlusIcon className="iconButton" onClick={plusComponent} />
    //     </Fragment>
    //   )}
    // </Fragment>
  );
};

export default Component1;
