
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {Component} from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';
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

import categoriesReducer from './common/stores/CategoriesStore';

import MainView from './common/modules/main/main-view';
import AddOutcome from './common/modules/main/add-outcome/add-outcome.view';


const appRouteConfigs = {
  Home: {screen: MainView},
  AddOutcome: {screen: AddOutcome},
}

const AppNavigator = createStackNavigator(appRouteConfigs);

const navReducer = createNavigationReducer(AppNavigator);
const testReducer = () => {
  return ['bla', 'bla2'];
}
const appReducer = combineReducers({
  nav: navReducer,
  categories: testReducer,
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
