import React, { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const IncrementNumber = () => {
    setNumber(number + 1);
  };

  const IncrementCount = useCallback((num) => {
    setCount(count + num);
  }, [count]);

  useEffect(() => {
    console.log("UseEffect Called");
  }, [IncrementCount]);

  return (
    <div>
      <h3>{number}</h3>
      <h3>{count}</h3>
      <div>
        <button onClick={() => IncrementNumber()}>Increment Number</button>
        <button onClick={() => IncrementCount(30)}>Increment Count</button>
      </div>
    </div>
  );
};

export default UseCallback;
