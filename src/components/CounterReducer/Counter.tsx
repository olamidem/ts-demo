import { useReducer } from "react";
import { CounterReducer, type State } from "./CounterReducer";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
const initialState: State = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <div>
      <h1>Counter With Reducer</h1>
      <h1>{state.count}</h1>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
