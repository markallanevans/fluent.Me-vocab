import React from 'react';
import MainRoot from './MainRoot';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import { vocabList } from './reducers';

const reducers = combineReducers({
  vocabList
})

const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
      <MainRoot />
    </Provider>  
)

export default App;