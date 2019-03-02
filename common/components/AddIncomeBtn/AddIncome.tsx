import React from 'react';
import {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class AddIncomeBtn extends Component {

  render() {

    return (
      <TouchableOpacity
        style={styles.button}
      >
        <Text
          style={styles.minus}
        >
          +
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#4caf50',
    borderRadius:100,
  },
  minus: {
    fontSize: 30,
    textAlign: 'center',
  },
});
