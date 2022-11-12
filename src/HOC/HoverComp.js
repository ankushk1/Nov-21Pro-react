import React from "react";
import { useState } from "react";
import withCounter from "./withCounter";

const HoverComp = (props) => {
  console.log(props)
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      HoverComp Counter <br />
      <div onMouseOver={onIncrement} onMouseLeave={onDecrement}>{count}</div> <br />
    </div>
  );
};

export default withCounter(HoverComp);
