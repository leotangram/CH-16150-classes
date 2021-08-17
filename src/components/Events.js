import React, { useState } from "react";
import Class09User from "./Class09User";
import Counter from "./Counter";
import EventListener from "./EventListener";
import ReviewExerciceClass09 from "./ReviewExerciceClass09";

const Events = () => {
  const [showEventListener, setShowEventListener] = useState(true);
  const [vocals, setVocals] = useState("");

  const onInput = (event) => {
    const { key, keyCode } = event;
    event.preventDefault();
    console.log({ key, keyCode });
  };

  const handleVocales = (event) => {
    const { key } = event;
    const vocales = ["a", "e", "i", "o", "u"];
    console.log({ key });
    if (
      // key === "a" ||
      // key === "e" ||
      // key === "i" ||
      // key === "o" ||
      // key === "u"
      vocales.includes(key)
    ) {
      event.preventDefault();
    } else {
      setVocals(vocals + event.key);
    }
  };

  return (
    <div>
      <h1>Eventos</h1>
      <h3>Counter</h3>
      <h4>onClick</h4>
      <Counter />
      <hr />
      <h3>Form</h3>
      <h4>onChange, onSubmit, preventDefault()</h4>
      <Class09User />
      <hr />
      <h3>EventListener</h3>
      <h4>Resize</h4>
      {showEventListener && <EventListener />}
      <button onClick={() => setShowEventListener(true)}>
        Agregar EventListener
      </button>
      <button onClick={() => setShowEventListener(false)}>
        Remover EventListener
      </button>
      <hr />
      <h3>onKeyDown</h3>
      <input onKeyDown={onInput} type="text" />
      <br />
      <h5>Vocals</h5>
      <input onKeyDown={handleVocales} type="text" />
      <h3>Review</h3>
      <ReviewExerciceClass09 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Events;
