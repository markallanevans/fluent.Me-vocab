import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
// import { PersistGate } from 'redux-persist/integration/react';
import reducers from './redux/reducers';
import StepBar from './components/StepBar';
import ExperiencePoints from './components/points/ExperiencePoints';
import TabNavigator from './navigation/TabNavigator';
import { $secondaryRed, $primaryRed } from './styles/styles';
// import persistor from './redux/configureStore';

/* eslint-disable no-console */
console.disableYellowBox = true;

const logger = createLogger();
const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const middleware = applyMiddleware(thunk, navMiddleware, logger);
const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <View style={{ flex: 1 }}>
        <View style={{
          flexDirection: 'row',
          shadowColor: $secondaryRed,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          }}
        >
          <StepBar />
          <ExperiencePoints style={{ marginTop: 40 }} />
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
          shadowRadius: 3,
        }}
        />
        <TabNavigator />
      </View>
    {/* </PersistGate> */}
  </Provider>
);

export default App;

