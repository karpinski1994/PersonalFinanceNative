import React from 'react';
import {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import GradientBg from '../../components/GradientBg/GradientBg'
export default class AddOutcomeBtn extends Component {

  render() {

    return (
      <TouchableOpacity
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

const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    // width:100,
    // height:100,
    // backgroundColor:'#F77699',
    // borderRadius:100,
  },
  minus: {
    fontSize: 30,
    textAlign: 'center',
  },
});
