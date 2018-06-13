import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NewVocab from '../components/NewVocab';
import VocabReview from '../components/VocabReview';

const rootConfigs = {
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
  initialRouteName: 'NewVocab',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
};

const VocabRootStack = createStackNavigator(rootConfigs, otherStackConfigs);

export default VocabRootStack;
