import React from 'react';

import {Component} from 'react';
import {StyleSheet, ScrollView, Text, TextInput, Slider, Button} from 'react-native';

import { connect } from 'react-redux';

import GradientBg from '../../../components/GradientBg/GradientBg';
import Tile from '../../../components/Tile/Tile';
import {Outcome} from '../../../models/Outcome';
import ItemsList from '../../../components/ItemsList/ItemsList';
import AddOperationForm from '../../../forms/AddOperationForm';
// @todo change this class for sth more flexible, reusable (for adding income and outcome maybe)
class AddOutcomeView extends Component<any>{
  // static navigationOptions = {
  //   title: 'add outcome view',
  //   headerStyle: {
  //     backgroundColor: 'red',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  //   headerTitle: 'blabla'
  // };

  render() {
    const {categories, outcomes, onAddOutcome} = this.props;
    return(
      <GradientBg style={styles.container}>
      {/*
      @todo create a factory which will return
        an input depending wheter is only number or string
        with propper validation
      */}
        <AddOperationForm
          onAddOperation={onAddOutcome}
          type='outcome'
          categories={categories}
        />
        <ScrollView>
          {/* todo lists are same when it comes to incomes outcomes and categories! */}
          <ItemsList
            items={outcomes}
          />
        </ScrollView>
      </GradientBg>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    alignItems: 'flex-end',
  },
});

const mapStateToProps = (state: any) => {
  console.log('addoutcome: ', state)
  return {
    categories: state.categories.categories,
    outcomes: state.outcomes.outcomes,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return  {
    onAddOutcome: (category: string, name: string, price: number) => dispatch(
      {
        type: 'ADD_OUTCOME',
        outcome: {
          id: JSON.stringify(new Date()),
          category,
          name,
          price,
          date: JSON.stringify(new Date()),
        }
      }
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOutcomeView);