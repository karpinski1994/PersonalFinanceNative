import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, TouchableOpacity} from 'react-native';


class Tile extends Component<any>{

  render() {
    const { number, title } = this.props;
    return(
      <TouchableOpacity style={styles.tab}>
        <Text style={[styles.text, styles.title]}>{ title }</Text>
        <Text style={[styles.text, styles.number]}>{ number }</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  tab: {
    height: 100,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  title: {

  },
  number: {

  },
});

export default (Tile);