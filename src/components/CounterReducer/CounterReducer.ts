export type State = {
  count: number;
};
export type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export const CounterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
