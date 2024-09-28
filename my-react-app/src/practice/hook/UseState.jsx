import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default UseState;
