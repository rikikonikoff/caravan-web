import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authentication from './authentication';
import persist from './persist';

const rootReducer = combineReducers({
  authentication,
  persist,
  routing: routerReducer,
})

export default rootReducer;
