import {GET_TODOS} from '../actions/actionConstants';


const initialState = {
  todos:[]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS :
      return {...state, todos : action.payload}
    default:
      return state;
  }
};

export default todoReducer;