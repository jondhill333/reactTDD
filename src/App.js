import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div data-test="componentApp">
        <h1 data-test="counterDisplay">
          The counter is currently <span data-test="count">{count}</span>
        </h1>
        <button data-test="incrementButton" onClick={() => setCount(count + 1)}>
          Increment Counter
        </button>
        <button data-test="decrementButton" onClick={() => setCount(count - 1)}>
          Decrement counter
        </button>
      </div>
    </>
  );
}

export default App;
