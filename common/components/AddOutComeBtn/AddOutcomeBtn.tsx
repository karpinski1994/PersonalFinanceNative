import React from 'react';
import {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class AddOutcomeBtn extends Component<any> {

  render() {

    return (
      <TouchableOpacity
        onPress={this.props.click}
        style={styles.button}
      >
        <Text
          style={styles.minus}
        >
          -
        </Text>
      </TouchableOpacity>
    )
  }
}
// @todo red color! refactor
const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'red',
    borderRadius:100,
  },
  minus: {
    fontSize: 30,
    textAlign: 'center',
  },
});
