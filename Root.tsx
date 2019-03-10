
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';

import {createStackNavigator} from 'react-navigation';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { Provider, connect } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';


import {categoriesReducer} from './common/stores/reducers/CategoriesReducers'
import {outcomesReducer} from './common/stores/reducers/OutcomesReducers';

import {appRouteConfigs} from './root-configs/RouteConfigs';
import {navConfigs} from './root-configs/NavConfigs';

const AppNavigator = createStackNavigator(
  appRouteConfigs,
  navConfigs
);

const navReducer = createNavigationReducer(AppNavigator);


const appReducer = combineReducers({
  nav: navReducer,
  data: categoriesReducer,
  outcomes: outcomesReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
  (state: any) => state.nav,
);

const App = createReduxContainer(AppNavigator);

const mapStateToProps = (state: any) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
