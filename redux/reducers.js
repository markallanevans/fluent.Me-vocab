import { combineReducers } from 'redux';
import studyStats from './studyStats';
import sentenceStore from './sentenceStore';
import checkAnswer from './checkAnswer';
import reviewList from './reviewList';
import vocabList from './vocabList';

import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { RootTab } from '../navigation/TabNavigator';

const navReducer = createNavigationReducer(RootTab);

const reducers = combineReducers({
  vocabList,
  reviewList,
  checkAnswer,
  sentenceStore,
  studyStats,
  nav: navReducer,
});

export default reducers;
