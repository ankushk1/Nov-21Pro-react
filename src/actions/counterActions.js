import { INCREMENT, DECREMENT, RESET, GET_TODOS } from "./actionConstants";

export const incrementCount = (num) => {
  return {
    type: INCREMENT,
    payload: num
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT
  };
};

export const resetCount = () => {
  return {
    type: RESET
  };
};


export const setTodos = (todos) => {
  // return {
  //   type: GET_TODOS,
  //   payload: todos
  // }
  return () => {}
} 