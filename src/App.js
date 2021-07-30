import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => setCounter(counter + 1);

  const subsCounter = () => setCounter(counter - 1);

  return (
    <div className="app-container">
      <div className="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Counter</h5>
          <div className="buttons-container">
            <button
              type="button"
              className="button substract-button"
              onClick={subsCounter}
            >
              -
            </button>
            <span className="counter">{counter}</span>
            <button
              type="button"
              className="button add-button"
              onClick={addCounter}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
