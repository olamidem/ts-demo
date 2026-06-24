import { useReducer } from "react";

const initialState = {
  count: 0,
};

type Action =
  | {
      type: "INCREMENT";
    }
  | { type: "DECREMENT" };

type State = {
  count: number;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter With useReducer</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Increment</button>
    </div>
  );
};

export default Counter;
