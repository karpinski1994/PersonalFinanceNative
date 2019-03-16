import React from 'react';
import {Component, Fragment} from 'react';

import {StyleSheet, Picker, TextInput, Button} from 'react-native';
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
    category: '',
  }

  addOperation = () => {
    const {type} = this.props;
    // add outcome
    if(type === 'outcome') {
      this.props.onAddOperation(
        'General',
        this.state.name,
        this.state.value,
        this.state.category,
      )
    }
  }

  render() {
    // @todo we need to differentiate between outcome and income
    const {categories} = this.props;
    const pickerCatItems = categories.map((c: any) => (
      <Picker.Item label={c.name} value={c.name} />
    ));
    return(
      <Fragment>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.setState({value})}
          value={`${this.state.value}`}
        />
        {/* @todo most used category by default */}
        <Picker
          selectedValue={this.state.category}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({category: itemValue})
          }>
          {pickerCatItems}
        </Picker>
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
  input : {height: 40, borderColor: 'gray', borderWidth: 1}
});

export default AddOperationForm;