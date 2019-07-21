//@flow
import * as React from 'react'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import reducers from './src/redux/reducers'
import StepBar from './src/components/StepBar'
import ExperiencePoints from './src/components/points/ExperiencePoints'

import { $secondaryRed, $primaryRed } from './src/styles/styles'
import AppWithNavigationState from './src/navigation/AppNavigator'

const logger = createLogger()
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav)
const middleware = applyMiddleware(thunk, navMiddleware, logger)
const store = createStore(reducers, middleware)

const App = () => (
  <Provider store={store}>
    <View style={styles.mainContainer}>
      <View style={styles.mainView}>
        <StepBar />
        <ExperiencePoints />
      </View>
      <View style={styles.contentView} />
      <AppWithNavigationState />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  mainView: {
    flexDirection: 'row',
    shadowColor: $secondaryRed,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  contentView: {
    height: 1,
    width: 400,
    backgroundColor: $primaryRed,
    shadowColor: $primaryRed,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 3
  }
})

export default App
