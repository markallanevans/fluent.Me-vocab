import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sentences from '../components/Sentences/Sentences';
import VocabRootTab from '../navigation/VocabRootTab';
import NewVocab from '../components/NewVocab';
import PointsScreen from '../components/PointsScreen';
import AddNewWords from '../components/AddNewWords';
import Login from '../components/Login';
import Categories from '../components/categories/Categories';

const tabScreenConfigs = {
  Profile: { screen: Login },
  Categories: { screen: Categories },
  Vocab: { screen: VocabRootTab },
  Sentences: { screen: Sentences },
  Points: { screen: PointsScreen },
  'Add Words': { screen: AddNewWords },
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
      } else if (routeName === 'Categories') {
        iconName = 'view-list';
      } else if (routeName === 'Points') {
        iconName = 'bubble-chart';
      } else if (routeName === 'Profile') {
        iconName = 'person';
      } else if (routeName === 'Add Words') {
        iconName = 'person';
      }

      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  initialRouteName: 'Profile',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};


const RootTab = createBottomTabNavigator(tabScreenConfigs, otherTabConfigs);

export default RootTab;

