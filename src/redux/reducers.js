import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import studyStats from './studyStats'
import sentenceStore from './sentenceStore'
import checkAnswer from './checkAnswer'
import reviewList from './reviewList'
import vocabList from './vocabList'
import { AppNavigator } from '../navigation/AppNavigator'

const navReducer = createNavigationReducer(AppNavigator)

const reducers = combineReducers({
  vocabList,
  reviewList,
  checkAnswer,
  sentenceStore,
  studyStats,
  nav: navReducer
})

export default reducers
