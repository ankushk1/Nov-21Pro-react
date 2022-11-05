import React, { useReducer } from "react";

const UseReducerComp = () => {
  const initialState = {
    count: 0,
    name: ""
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "name change":
        return { ...state, name: action.event.target.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 20 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <input
          type="text"
          value={state.name}
          onChange={(event) => dispatch({ type: "name change", event: event })}
        />
      </div>
    </div>
  );
};

export default UseReducerComp;
