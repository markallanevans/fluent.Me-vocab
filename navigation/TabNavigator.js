import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sentences from '../components/Sentences/Sentences';
import NewVocab from '../components/NewVocab';
import PointsScreen from '../components/PointsScreen';
import Animation from '../components/Animation';

const tabScreenConfigs = {
  Vocab: { screen: NewVocab },
  Sentences: { screen: Sentences },
  Points: { screen: PointsScreen },
  Animation: { screen: Animation },
};

const otherTabConfigs = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Vocab') {
        iconName = 'school';
      } else if (routeName === 'Sentences') {
        iconName = 'short-text';
      } else if (routeName === 'Points') {
        iconName = 'bubble-chart';
      }

      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};


const RootTab = createBottomTabNavigator(tabScreenConfigs, otherTabConfigs);

export default RootTab;

