import React from 'react';
// @todo refactor paths
import AddIncomeBtn  from '../../components/AddIncomeBtn/AddIncome';
import AddOutcomeBtn  from '../../components/AddOutComeBtn/AddOutcomeBtn';

import {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class MainView extends Component{


  render() {
    return(
      <View>

      </View>
      <View style={styles.btnsContainer}>
        <AddIncomeBtn />
        <AddOutcomeBtn />
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
  welcome: {
    display: 'flex',
    width: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});