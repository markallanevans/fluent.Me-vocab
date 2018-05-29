import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import NewVocab from './NewVocab';
import styles from './styles'
import $primaryRed from './styles';

const rootConfigs = {
  Home: {screen: Login},
  NewVocab: 
    {
    screen: NewVocab, 
    navigationOptions: {
    title: "New Vocabulary",
    }
  }
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

