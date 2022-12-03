import React, { useState } from "react";
import { decrementCount, incrementCount, resetCount } from "../actions/counterActions";
import {connect} from 'react-redux';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
const CounterRedux = (props) => {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const count = useSelector( state => state.count)

  useEffect(() => {
    setCounter(count)
  },[count]) 

  const onIncrement = () => {
    // increment()
    dispatch(incrementCount(5))
  };

  const onDecrement = () => {
    // decrement(),
    dispatch(decrementCount())
  };

  const onReset = () => {
    // reset()
    dispatch(resetCount())
  };

  return (
    <div>
      {counter}

      <div>
        <button onClick={() => onIncrement()}>Inc</button>
        <button onClick={() => onDecrement()}>Dec</button>
        <button onClick={() => onReset()}>Reset</button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return state
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment : () => dispatch(incrementCount()),
//     decrement : () => dispatch(decrementCount()),
//     reset : () => dispatch(resetCount())
//   }
// }


export default CounterRedux;
