import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Slider, Button} from 'react-native';

import { connect } from 'react-redux';

class AddOutcomeView extends Component<any>{
  static navigationOptions = {
    title: 'add outcome view',
  };
  state={
    name: 'input outcome name',
    value: 0,
  }

  addOutcome = () => {
    // add outcome
    this.props.onAddOutcome(
      'General',
      this.state.name,
      this.state.value,
    )
    this.props.navigation.navigate('Home')
  }

  render() {
    return(
      <View>
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
        {/* <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(catBudgetPercent) => this.setState({catBudgetPercent})}
        /> */}
        <Button
          title='Add outcome'
          onPress={this.addOutcome}
        />
        <Text>{`${JSON.stringify(this.props.categories)}`}</Text>
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
  return { categories };
};

const mapDispatchToProps = (dispatch: any) => {
  return  {
    onAddOutcome: (catTitle: string, name: string, value: number) => dispatch(
      {
        type: 'ADD_OUTCOME',
        outcome: {
          catTitle,
          name,
          value,
        }
      }
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOutcomeView);