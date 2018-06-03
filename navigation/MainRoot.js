import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from '../components/Login';
import NewVocab from '../components/NewVocab';
import VocabReview from '../components/VocabReview';
import styles from '../styles/styles'

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

