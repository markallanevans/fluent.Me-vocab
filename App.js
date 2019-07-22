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
import AppWithNavigationState from './src/navigation/AppNavigator'
import appStyles from './src/styles/AppStyles'

const logger = createLogger()
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav)
const middleware = applyMiddleware(thunk, navMiddleware, logger)
const store = createStore(reducers, middleware)

const App = () => (
  <Provider store={store}>
    <View style={appStyles.mainContainer}>
      <View style={appStyles.mainView}>
        <StepBar />
        <ExperiencePoints />
      </View>
      <View style={appStyles.contentView} />
      <AppWithNavigationState />
    </View>
  </Provider>
)

export default App
