import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import TabNavigator from './navigation/TabNavigator';

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
);

export default App;

/* eslint-disable no-console */
console.ignoredYellowBox = ['Remote debugger'];
/* eslint-enable no-console */
