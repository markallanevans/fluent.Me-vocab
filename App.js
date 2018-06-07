import React from 'react';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import MainRoot from './navigation/MainRoot';

const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <MainRoot />
  </Provider>
);

export default App;
