import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import MainRoot from './navigation/MainRoot';

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <MainRoot />
  </Provider>
);

export default App;
