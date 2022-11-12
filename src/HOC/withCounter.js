import React, { useState } from 'react'

const withCounter = (WrappedComponent) => (props) => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <WrappedComponent count={count} onIncrement={onIncrement} onDecrement={onDecrement} name={props.name}/>
    </div>
  )
}

export default withCounter