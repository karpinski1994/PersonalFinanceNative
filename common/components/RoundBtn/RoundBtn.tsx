import React from 'react';
import {Component} from 'react';

import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import GradientBg from '../GradientBg/GradientBg';

// @todo change it for round btn (more flexible, reusable approach)
export default class RoundBtn extends Component<any> {
  render() {
    return (
        <GradientBg
          colors={['#f9aeae', '#c14b4b']}
          style={styles.gradient}
        >
          <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.button}
          >
            <Text
              style={styles.minus}
            >
              -
            </Text>
          </TouchableOpacity>
        </GradientBg>
    )
  }
}
// @todo red color! refactor
const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:'#1E254A',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    borderRadius:100,
  },
  gradient: {
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    borderRadius:100,
    opacity: 0.85,
  },
  minus: {
    fontSize: 30,
    textAlign: 'center',
  },
});
