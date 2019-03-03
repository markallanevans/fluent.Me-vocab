//@flow
import * as React from 'react'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import reducers from './redux/reducers'
import StepBar from './components/StepBar'
import ExperiencePoints from './components/points/ExperiencePoints'
import TabNavigator from './navigation/TabNavigator'
import { $secondaryRed, $primaryRed } from './styles/styles'

const logger = createLogger()
const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)
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
      <TabNavigator />
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
