import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Slider, Button} from 'react-native';

import { connect } from 'react-redux';

class AddOutcomeView extends Component<any>{
  static navigationOptions = {
    title: 'add outcome view',
  };
  state={
    categoryName: 'input cat name',
    catBudgetPercent: 0,
    outcomeValue: `0`,
  }

  addOutcome = () => {
    // add outcome
    this.props.navigation.navigate('Home')
  }

  render() {
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(categoryName) => this.setState({categoryName})}
          value={this.state.categoryName}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(outcomeValue) => this.setState({outcomeValue})}
          value={this.state.outcomeValue}
        />
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(catBudgetPercent) => this.setState({catBudgetPercent})}
        />
        <Button
          title='Add outcome'
          onPress={this.addOutcome}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
  const { categories } = state
  return { categories }
};

export default connect(mapStateToProps)(AddOutcomeView);