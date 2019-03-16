import React from 'react';
import {Component} from 'react';
import { withNavigation } from 'react-navigation';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// @todo maybe adjust the size and customize to be usable also in the menu view

class TextBtn extends Component<any>{
  render() {
    return(
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate(this.props.targetRoute)}
        style={styles.button}
        >
          <Text
            style={styles.text}
          >
            {this.props.title.toUpperCase()}
          </Text>
        </TouchableOpacity>
    );
  }
}

// @todo refactor colors and everything
// @todo colors etc customizable in menu :)
const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 1,
    width: 100,
    height: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#BBB'
  },
});

export default withNavigation(TextBtn);