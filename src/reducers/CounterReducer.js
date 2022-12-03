import {INCREMENT, DECREMENT, RESET, GET_TODOS} from '../actions/actionConstants';


const initialState = {
  count: 0,
  // todos:[]
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload};
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    // case GET_TODOS :
    //   return {...state, todos : action.payload}
    default:
      return state;
  }
};

export default counterReducer;