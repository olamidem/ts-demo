import { useContext } from "react";
import { MyContext } from "./MyContext";

const Count = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
