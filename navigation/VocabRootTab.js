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
  header: 'none',
};

const VocabRootStack = createStackNavigator(rootConfigs, otherStackConfigs);

const VocabRootTab = () => (
  <VocabRootStack />
);

export default VocabRootTab;
