import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../components/Login';
import NewVocab from '../components/NewVocab';
import VocabReview from '../components/VocabReview';
import RootTab from '../navigation/TabNavigator';

const rootConfigs = {
  Home: { screen: Login },
  RootTab: { screen: RootTab },
  NewVocab:
    {
      screen: NewVocab,
      navigationOptions: {
        title: 'New Vocabulary',
      },
    },
  VocabReview:
    {
      screen: VocabReview,
      navigationOptions: {
        title: 'Time to Review!',
      },
    },
};

const otherStackConfigs = {
  initialRouteName: 'Home',
};

const RootStack = createStackNavigator(rootConfigs, otherStackConfigs);

const App = () => (
  <RootStack />
);

export default App;
