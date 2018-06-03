import React from 'react';
import MainRoot from './navigation/MainRoot';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { vocabList, reviewList, checkAnswer } from './redux/reducers';

const reducers = combineReducers({
  vocabList,
  reviewList,
  checkAnswer
})

const middleware = applyMiddleware(
  logger
)

const store = createStore(reducers, middleware);

const App = () => (
    <Provider store={store}>
      <MainRoot />
    </Provider>  
)

export default App;