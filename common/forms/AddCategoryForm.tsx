import React from 'react';
import {Component, Fragment} from 'react';

import {Category} from '../models/Category';

import {TextInput, Button, Slider} from 'react-native';

export default class AddCategoryForm extends Component<any> {
  state = {
    name: '',
    budgetPercent: 0,
  }

  addCategory = () => {
    const {name, budgetPercent} = this.state;
    const {categories} = this.props;
    const isNewCat = categories.findIndex((c:Category) => c.name === name) === -1;
    if(isNewCat) {
      this.props.addCategory({
        name,
        budgetPercent,
      })
    } else {
      // @todo handle information
      console.log('Category already exists');
    }
  }
  render() {
    return(
      <Fragment>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={(budgetPercent) => this.setState({budgetPercent})}
        />
        <Button
          title='Add cat'
          onPress={this.addCategory}
        />
      </Fragment>
    )
  }
}