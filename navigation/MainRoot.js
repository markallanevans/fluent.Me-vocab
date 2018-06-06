import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../components/Login';
import NewVocab from '../components/NewVocab';
import VocabReview from '../components/VocabReview';

const rootConfigs = {
  Home: { screen: Login },
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
