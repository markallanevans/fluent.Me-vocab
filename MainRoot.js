import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import NewVocab from './NewVocab';
import VocabReview from './VocabReview';
import styles from './styles/styles'

const rootConfigs = {
  Home: {screen: Login},
  NewVocab: 
    {
    screen: NewVocab, 
    navigationOptions: {
    title: "New Vocabulary",
    },
  },
  VocabReview: 
    {
    screen: VocabReview, 
    navigationOptions: {
    title: "Time to Review!",
    },
  },
}

const otherStackConfigs = {
  initialRouteName: 'Home'
}

const RootStack = createStackNavigator(rootConfigs, otherStackConfigs);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

