import * as React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import StepBar from './src/components/StepBar'
import ExperiencePoints from './src/components/points/ExperiencePoints'
import AppWithNavigationState from './src/navigation/AppNavigator'
import appStyles from './src/styles/AppStyles'
import store from './src/redux/store'

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
