import React, { useEffect, useState } from "react";


//Use Effect can work like componentDidMount, componentDidUpdate, ComponentWillUnmount
const FuncLC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log("useEffect1 called");
  },[]);

  useEffect(() => {
    console.log("useEffect2 called");
  }, [count2]);

  useEffect(()=>{
    console.log("useEffect3 called")
    return (()=>{
      console.log('unmount');
    })
  },[])

  return (
    <div>
      {console.log("render")}
      {count} <br />
      {count2}
      <div>
        <button onClick={() => setCount(count + 1)}> Increment</button>
        <button onClick={() => setCount2(count2 + 1)}> Increment</button>
      </div>
    </div>
  );
};

export default FuncLC;
