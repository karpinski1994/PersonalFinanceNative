import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class MainView extends Component{


  render() {
    return(
      <View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    alignItems: 'flex-end',
  },
});