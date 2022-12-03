import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './reducers/CounterReducer';
import todoReducer from './reducers/TodoReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
const combinedReducers = combineReducers({
  counterData : counterReducer,
  todoData: todoReducer 
})
const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;