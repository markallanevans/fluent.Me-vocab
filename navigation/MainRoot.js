import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { createNavigationPropConstructor, initializeListeners } from 'react-navigation-redux-helpers';
import Login from '../components/Login';
import NewVocab from '../components/NewVocab';
import VocabReview from '../components/VocabReview';
import TabNavigatorWithNaviationState from '../navigation/TabNavigator';

const rootConfigs = {
  Home: { screen: Login },
  TabNavigator: { screen: TabNavigatorWithNaviationState },
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
  initialRouteName: 'TabNavigator',
};

export const RootStack = createStackNavigator(rootConfigs, otherStackConfigs);

class App extends React.Component {
  constructor() {
    super();
    this.navigationPropConstructor = createNavigationPropConstructor('root');
  }

  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }
  
  render() {
    const navigation = this.navigationPropConstructor(
      this.props.dispatch,
      this.props.nav
    );
    return <RootStack navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);
