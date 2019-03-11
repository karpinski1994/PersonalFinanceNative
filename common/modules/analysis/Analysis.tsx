import React from 'react';

import {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {connect} from 'react-redux';

class Analysis extends Component<any>{


  render() {
    const curCats = this.props.categories;
    let markup = null;
    // if(curCats) {
    //   markup = curCats.map(element => (
    //     <View>
    //       <Text>{element.id}</Text>
    //       <Text>{element.title}</Text>
    //       <Text>{element.budgetPercent}</Text>
    //     </View>
    //   ));
    // }

    return(
      <View>
        {markup}
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
  categories: state.categories.categories
});

export default connect(mapStateToProps)(Analysis);