import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Slider} from 'react-native';

import {connect} from 'react-redux';

import {Category} from '../../../models/Category';

import Tile from '../../../components/Tile/Tile';

class CategoriesList extends Component<any>{

  // componentDidMount() {
  //   console.log('this.props.categories: ', this.props)
  // }
  render() {
    const { categories } = this.props;
    const catsMarkup = categories.map((c:Category , i:number) => {
      return <Tile
              key={i}
              title={c.title}
              number={c.budgetPercent}
              />
    });
    return catsMarkup;
  }
}


// const styles = StyleSheet.create({
//   error: {
//     color: '#909770a0',
//     fontSize: 30,
//   }
// });

export default CategoriesList;