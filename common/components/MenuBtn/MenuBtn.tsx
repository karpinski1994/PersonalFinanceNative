import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
class MenuBtn extends Component<any>{

  render() {
    return(
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate(this.props.targetRoute)}
        style={styles.button}
        >
          <Text
            style={styles.text}
          >
            {this.props.title}
          </Text>
        </TouchableOpacity>
    );
  }
}

// @todo refactor color
const styles = StyleSheet.create({
  button: {
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor: '#2d2f32',
    height: 100,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default withNavigation(MenuBtn);