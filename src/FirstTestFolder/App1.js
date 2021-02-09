import logo from "./logo.svg";
import "./App1.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  function incrementCount() {
    if (error) {
      setError(false);
    }
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div data-test="componentApp">
        <h1 data-test="counterDisplay">
          The counter is currently <span data-test="count">{count}</span>
        </h1>
        <button data-test="incrementButton" onClick={incrementCount}>
          Increment Counter
        </button>
        <button data-test="decrementButton" onClick={decrementCount}>
          Decrement counter
        </button>
        <span
          data-test="error-message"
          className={`error ${error ? "" : "hidden"}`}
        >
          Count cannot go below zero
        </span>
      </div>
    </>
  );
}

export default App;
