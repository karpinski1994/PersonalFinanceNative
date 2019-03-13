import React from 'react';

import {Component, Fragment} from 'react';
import {StyleSheet, ScrollView, Text, TextInput, Slider, Button} from 'react-native';

import { connect } from 'react-redux';

import GradientBg from '../components/GradientBg/GradientBg';
import Tile from '../components/Tile/Tile';
import {Outcome} from '../models/Outcome';
// @todo change this class for sth more flexible, reusable (for adding income and outcome maybe)
class AddOperationForm extends Component<any>{
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

  state = {
    name: 'input outcome name',
    value: 0,
  }

  addOperation = () => {
    // add outcome
    this.props.onAddOperation(
      'General',
      this.state.name,
      this.state.value,
    )
    // this.props.navigation.navigate('Home')
  }

  render() {
    // @todo we need to differentiate between outcome and income
    return(
      <Fragment>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(value) => this.setState({value})}
          value={`${this.state.value}`}
        />
        <Button
          title='Add outcome'
          onPress={this.addOperation}
        />
      </Fragment>
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

export default AddOperationForm;