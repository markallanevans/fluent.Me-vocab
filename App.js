import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import reducers from './redux/reducers';
import StepBar from './components/StepBar';
import ExperiencePoints from './components/ExperiencePoints';
import TabNavigator from './navigation/TabNavigator';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { $secondaryRed, $primaryWhite, $primaryRed } from './styles/styles';

const logger = createLogger();

const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const middleware = applyMiddleware(thunk, navMiddleware, logger);

const store = createStore(reducers, middleware);

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{
            flexDirection: 'row', 
            // borderBottomWidth: 2, 
            // borderBottomColor: $secondaryRed,
            shadowColor: $secondaryRed,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            }} >
            <StepBar />
            <ExperiencePoints style={{marginTop: 40}}/>
          </View>
          <View style={{
            height: 1,
            width: 400, 
            backgroundColor: $primaryRed,
            shadowColor: $primaryRed,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.9,
            shadowRadius: 3,}}>
            </View>
          <TabNavigator  />
        </View>
      </Provider>
    );
  }
}


export default (App);

/* eslint-disable no-console */
console.ignoredYellowBox = ['Remote debugger'];
/* eslint-enable no-console */
