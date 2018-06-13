import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import reducers from './redux/reducers';
import StepBar from './components/StepBar';
import TabNavigator from './navigation/TabNavigator';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const logger = createLogger();

const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const middleware = applyMiddleware(thunk, navMiddleware, logger);

const store = createStore(reducers, middleware);

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
        <View style={{flex: 1}}>
          <StepBar  />
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
