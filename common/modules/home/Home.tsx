import React from 'react';
// @todo refactor paths
import AddIncomeBtn  from '../../components/AddIncomeBtn/AddIncome';
import AddOutcomeBtn  from '../../components/AddOutComeBtn/AddOutcomeBtn';
import Analysis from '../analysis/Analysis';
import GradientBg from '../../components/GradientBg/GradientBg';
import {Component} from 'react';
import {StyleSheet, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component<any>{

  render() {
    return(
      <GradientBg>
        <Icon
          style={styles.menuBtn}
          name="bars" size={40} color="#2A2A2A"
          onPress={() => this.props.navigation.navigate('MainMenu')}
        />
        <View style={styles.analysisContainer}>
          <Analysis />
        </View>
        <View style={styles.btnsContainer}>
          {/* <AddIncomeBtn /> */}
          <AddOutcomeBtn
            click={() => this.props.navigation.navigate('AddOutcome')}
          />
        </View>
        </GradientBg>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E254A',
  },
  analysisContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
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
  menuBtn: {
    marginLeft: 20,
    marginTop: 20,
  }
});
