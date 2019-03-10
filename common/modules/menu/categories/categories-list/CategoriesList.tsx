import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Slider} from 'react-native';

import {connect} from 'react-redux';

import {Category} from '../../../../models/Category';

import CategoryView from '../category/Category';

class CategoriesList extends Component<any>{

  // componentDidMount() {
  //   console.log('this.props.categories: ', this.props)
  // }
  render() {

    // const categoriesMarkup =
    return this.props.categories.map((c:Category ) => <CategoryView category={c} />);
  }
}


// const styles = StyleSheet.create({
//   error: {
//     color: '#909770a0',
//     fontSize: 30,
//   }
// });

export default CategoriesList;