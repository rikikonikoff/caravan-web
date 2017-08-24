import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  routerMiddleware(browserHistory),
  thunk
]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

autoRehydrate(store);
persistStore(store);

export default store;
