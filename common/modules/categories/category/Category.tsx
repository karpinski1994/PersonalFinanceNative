import React from 'react';
import {Component} from 'react';

import {View, Text} from 'react-native';

class Category extends Component<any>{
  render() {
    const { navigation } = this.props;
    const category = navigation.getParam('cat');
    return  <View>
              <Text>
                {category.name}
              </Text>
            </View>;
  }
}

export default Category;