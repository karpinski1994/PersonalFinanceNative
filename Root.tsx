
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
import { Category } from './common/models/Category';


const appRouteConfigs = {
  Home: {screen: MainView},
  AddOutcome: {screen: AddOutcome},
}

const AppNavigator = createStackNavigator(appRouteConfigs);

const navReducer = createNavigationReducer(AppNavigator);

const INIT_STATE = {
  something: 'blabla'
}



const INIT_CATEGORY = {
  id: 'asdsad',
  title: 'General',
  budgetPercent: 0,
  outcomesList: [
    {
      id: 'asdsaas',
      what: 'cable',
      price: 89.99,
    }
  ],
}
const INIT_CATEGORIES = [INIT_CATEGORY, INIT_CATEGORY];

const reducer = (state: any = INIT_STATE, action: any) => {
  if(action.type === 'LOG') {
    return {
      ...state,
      something: '0123'
    }
  }
  return state;
}

const outcomeReducer = (state: any = INIT_CATEGORIES, action: any) => {
  if(action.type === 'ADD_OUTCOME') {
    const { outcome } = action;
    const { catTitle } = outcome;
    console.log('outcome: ', outcome)
    console.log('catTitle: ', catTitle)
    console.log('action: ', action)
      const curCats = state;
      console.log('curCats: ', curCats)
      const curCatId = curCats.findIndex((c:Category) => c.title === catTitle);
      console.log('curCatId: ', curCatId)
      if(curCatId > -1) {
        curCats[curCatId].outcomesList.push(action.outcome);
        console.log('IF curCats: ', curCats)
      }
      return {
        ...state,
        categories: curCats
      }

  }
  return state;
}

const appReducer = combineReducers({
  nav: navReducer,
  something: reducer,
  categories: outcomeReducer
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
