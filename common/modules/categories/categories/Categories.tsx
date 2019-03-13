import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Slider, ScrollView} from 'react-native';

import {connect} from 'react-redux';

import {Category} from '../../../models/Category';

import GradientBg from '../../../components/GradientBg/GradientBg';

import {ADD_CATEGORY} from '../../../stores/actions/CategoriesActions';

import ItemsList from '../../../components/ItemsList/ItemsList';

class Categories extends Component<any>{
  state = {
    name: '',
    budgetPercent: 0,
    outcomesList: []
  }
  addCategory = () => {
    const {name, budgetPercent, outcomesList} = this.state;
    const {categories} = this.props;
    const isNewCat = categories.findIndex((c:Category) => c.name === name) === -1;
    if(isNewCat) {
      this.props.addCategory({
        name,
        budgetPercent,
        outcomesList
      })
    } else {
      // @todo handle information
      console.log('Category already exists');
    }
  }

  render() {

    return(
      <GradientBg>
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
        <ScrollView>
          <ItemsList items={this.props.categories}/>
        </ScrollView>
        {/* <ErrorBox
          info={this.props.error ? `${this.props.error}` : null }
        /> */}
      </GradientBg>
    );
  }
}


// const styles = StyleSheet.create({
//   error: {
//     color: '#909770a0',
//     fontSize: 30,
//   }
// });


const mapStateToProps = (state: any) => {
  console.log('categories state:', state);
    return {
      categories: state.categories.categories,
      error: state.error,
    }
};

const mapDisptachToProps = (dispatch: any) => {
  return {
    addCategory: (cat: Category) => dispatch({type: ADD_CATEGORY, category: cat})
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Categories);
