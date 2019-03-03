import React from 'react';
import {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class AddOutcomeBtn extends Component {

  render() {

    return (
      <TouchableOpacity
        style={styles.button}
      >
        <Text
          style={styles.plus}
        >
          -
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
    backgroundColor:'#cb2431',
    borderRadius:100,
  },
  plus: {
    fontSize: 30,
    textAlign: 'center',
  },
});
