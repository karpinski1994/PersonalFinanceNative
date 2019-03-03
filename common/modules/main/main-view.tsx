import React from 'react';
// @todo refactor paths
import AddIncomeBtn  from '../../components/AddIncomeBtn/AddIncome';
import AddOutcomeBtn  from '../../components/AddOutComeBtn/AddOutcomeBtn';
import AnalysisView from '../analysis/analysis-view'
import {Component} from 'react';
import {StyleSheet, View } from 'react-native';

export default class MainView extends Component<any>{
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.analysisContainer}>
          <AnalysisView />
        </View>
        <View style={styles.btnsContainer}>
          <AddIncomeBtn />
          <AddOutcomeBtn
            click={() => this.props.navigation.navigate('AddOutcome')}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  analysisContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
