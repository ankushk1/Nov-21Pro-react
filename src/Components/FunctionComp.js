import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

// useState, useEffect, useContext ...
const FunctionComp = () => {
  const [counter, setCounter] = useState({
    count1: 0,
    count2: 1
  });

  // const onIncrement = () => {
  //   setCounter((prevState) => {
  //     return {
  //       ...counter,
  //       count1: prevState.count1 + 1
  //     };
  //   });
  //   setCounter((prevState) => {
  //     return {
  //       ...counter,
  //       count1: prevState.count1 + 1
  //     };
  //   });
  // setCounter({
  //   ...counter,
  //   count1: counter.count1 + 1
  // });
  // };

  // const onIncrement2 = () => {
  //   setCounter({
  //     ...counter,
  //     count2: counter.count2 + 1
  //   });
  // };

  return (
    <div>
      {/* {console.log(counter)} */}
      {/* <h3>{counter.count1}</h3>
      <h3>{counter.count2}</h3>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncrement2}>Increment2</button>
      </div> */}
      <div style={{ marginTop: "20px" }}>
        <ItemDetails name={"XYZ"} email={"XYZ@gmail.com"} disablePhone={true}/>
      </div>
    </div>
  );
};

export default FunctionComp;
