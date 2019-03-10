import React from 'react';
import {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ErrorBox extends Component<any> {


  state = {
    isErrorVisible : false
  }

  renderErrorForWhile() {

  }

  render() {
    const markup = this.state.isErrorVisible ?
        <View
          style={styles.error}
        >
          <Text>
            {this.props.info}
          </Text>
        </View> : null;
    return markup
  }
}
// @todo red color! refactor
const styles = StyleSheet.create({
  error: {
    borderBottomWidth: 1,
    borderBottomColor: '#2d2f32',
    height: 20,
    color: 'white',
    justifyContent: 'center',
  },
});
