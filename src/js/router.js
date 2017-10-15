import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import HomeContainer from './containers/HomeContainer';
import App from './App';


const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="/home" component={HomeContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
