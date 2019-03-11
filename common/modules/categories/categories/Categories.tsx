import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Slider, ScrollView} from 'react-native';

import {connect} from 'react-redux';

import {Category} from '../../../models/Category';

import GradientBg from '../../../components/GradientBg/GradientBg';

import {ADD_CATEGORY} from '../../../stores/actions/CategoriesActions';

import CategoriesList from '../categories-list/CategoriesList'

class Categories extends Component<any>{
  state = {
    title: '',
    budgetPercent: 0,
    outcomesList: []
  }
  addCategory = () => {
    const {title, budgetPercent, outcomesList} = this.state;
    this.props.addCategory({
      title,
      budgetPercent,
      outcomesList
    })
  }

  render() {

    return(
      <GradientBg>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(budgetPercent) => this.setState({budgetPercent})}
        />
        <Button
          title='Add cat'
          onPress={this.addCategory}
        />
        <ScrollView>
          <CategoriesList categories={this.props.categories}/>
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
