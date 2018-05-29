import React from 'react';
import MainRoot from './MainRoot';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const wordBank = [
  'dog',
  'cat',
  'bird',
  'lizard',
  'fox',
  'elephant'
];

const vocabList = (state = wordBank, action) => {
  switch(action.type) {
    case 'ADD_WORD':
      return state.concat(action.data);
    default:
      return state;
  }
};

const store = createStore(vocabList);

const App = () => (
    <Provider store={store}>
      <MainRoot />
    </Provider>  
)

export default App;