import React, { useState } from "react";
function CounterUseState({ count, setCount }: { count: number; setCount: (count: number) => void; }) {

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default CounterUseState;