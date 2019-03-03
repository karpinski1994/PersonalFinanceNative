import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {connect} from 'react-redux';

class AnalysisView extends Component<any>{

  render() {
    const categoriesMarkup = this.props.categories.map((c:any) => {
      <Text>{c}</Text>
    })
    return(
      <View>
        {categoriesMarkup}
        <Text>przychody</Text>
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


const mapStateToProps = (state: any) => ({
  categories: state.categories
});

export default connect(mapStateToProps)(AnalysisView);