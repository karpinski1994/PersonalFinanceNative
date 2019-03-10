import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, TouchableOpacity} from 'react-native';


class Category extends Component<any>{

  render() {
    return(
      <TouchableOpacity>
        <Text>{this.props.category.name}</Text>
        <Text>{this.props.category.budgetPercent}</Text>
      </TouchableOpacity>
    );
  }
}


// const styles = StyleSheet.create({
//   error: {
//     color: '#909770a0',
//     fontSize: 30,
//   }
// });

export default (Category);