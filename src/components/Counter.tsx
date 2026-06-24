import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
      return setCount((pervCount) => pervCount + 1);
      
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter: {count}</p>
      <button onClick={handleCount}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
