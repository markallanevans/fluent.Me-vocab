import React from 'react'
import { connect } from 'react-redux'
import {
  createReduxContainer,
  initializeListeners
} from 'react-navigation-redux-helpers'
import { createBottomTabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SentenceReview from '../components/sentenceScreen/SentenceReview'
import VocabRootTab from './VocabRootTab'
import PointsScreen from '../components/points/PointsScreen'
import AddNewWords from '../components/AddNewWords'
import Login from '../components/Login'
import Categories from '../components/categories/Categories'
import {
  $tertiaryRed,
  $secondaryRed,
  $primaryWhite,
  $secondaryWhite
} from '../styles/styles'

const tabScreenConfigs = {
  Profile: { screen: Login },
  Categories: { screen: Categories },
  Vocab: { screen: VocabRootTab },
  Sentences: { screen: SentenceReview },
  Points: { screen: PointsScreen },
  'Add Words': { screen: AddNewWords }
}

const otherTabConfigs = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Vocab') {
        iconName = 'school'
      } else if (routeName === 'Sentences') {
        iconName = 'short-text'
      } else if (routeName === 'Categories') {
        iconName = 'view-list'
      } else if (routeName === 'Points') {
        iconName = 'bubble-chart'
      } else if (routeName === 'Profile') {
        iconName = 'person'
      } else if (routeName === 'Add Words') {
        iconName = 'add-box'
      }

      return <Icon name={iconName} size={25} color={tintColor} />
    }
  }),
  initialRouteName: 'Categories',
  tabBarOptions: {
    activeTintColor: $primaryWhite,
    inactiveTintColor: $secondaryWhite,
    activeBackgroundColor: $tertiaryRed,
    inactiveBackgroundColor: $secondaryRed,
    style: {
      borderTopWidth: 0,
      shadowColor: $secondaryWhite,
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.5,
      shadowRadius: 5
    }
  }
}

export const AppNavigator = createBottomTabNavigator(
  tabScreenConfigs,
  otherTabConfigs
)

const App = createReduxContainer(AppNavigator)
const mapStateToProps = state => ({
  state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default AppWithNavigationState
