import React from 'react';

import {Component} from 'react';
import {StyleSheet} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
export default class GradientBg extends Component<any> {

  render() {
    return (
      <LinearGradient colors={this.props.colors || ['#495492', '#1E254A']} style={this.props.style || styles.container}>
        {this.props.children}
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});