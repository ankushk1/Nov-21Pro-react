import React, { useState } from "react";
import withCounter from "./withCounter";

const CounterComp = (props) => {
  console.log(props)
  const {count, onIncrement, onDecrement} = props;
  return (
    <div>
      Counter- {count} <br />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default withCounter(CounterComp);
