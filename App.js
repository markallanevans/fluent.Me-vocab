import React from 'react';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { vocabList, reviewList, checkAnswer, sentenceStore } from './redux/reducers';
import MainRoot from './navigation/MainRoot';

const reducers = combineReducers({
  vocabList,
  reviewList,
  checkAnswer,
  sentenceStore,
});

const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <MainRoot />
  </Provider>
);

export default App;
