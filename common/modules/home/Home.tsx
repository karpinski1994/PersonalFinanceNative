import React from 'react';
// @todo refactor paths
import AddOutcomeBtn  from '../../components/AddOutcomeBtn/AddOutcomeBtn';
import TextBtn  from '../../components/TextBtn/TextBtn';
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
        {/* @todo these buttons (textBtn) will be changed left right according to the current
        view and also swiping whole view to the left and right has to work intuitiveli
        like in habitica for ex */}
          <TextBtn
            targetRoute='Categories'
            title='Categories'
          />
          <AddOutcomeBtn
            click={() => this.props.navigation.navigate('Outcomes')}
          />
          <TextBtn
            targetRoute='Outcomes'
            title='Outcomes'
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
    justifyContent: 'space-around',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
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
