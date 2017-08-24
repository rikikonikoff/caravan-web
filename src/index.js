import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store from './store/configureStore';
import App from './components/App';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}></IndexRoute>
        <Route path='/login' component={LandingPage}></Route>
        <Route path='/home' component={Dashboard}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

registerServiceWorker();
