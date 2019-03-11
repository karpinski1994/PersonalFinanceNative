import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Slider} from 'react-native';

import {connect} from 'react-redux';

import {Outcome} from '../../../models/Outcome';

import Tile from '../../../components/Tile/Tile';

class OutcomesList extends Component<any>{

  // componentDidMount() {
  //   console.log('this.props.categories: ', this.props)
  // }
  render() {
    const { outcomes } = this.props;
    console.log('outcomes: ', outcomes)
    const catsMarkup = outcomes.map((c:Outcome , i:number) => {
      return <Tile
              key={i}
              title={c.name}
              number={c.price}
              />
    });
    return catsMarkup;
  }
}


// const styles = StyleSheet.create({
//   error: {
//     color: '#909770a0',
//     fontSize: 30,
//   }
// });

export default OutcomesList;