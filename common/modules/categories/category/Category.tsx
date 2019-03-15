import React from 'react';
import {View, Text} from 'react-native';
import {Component} from 'react';
class Category extends Component<any>{

  render() {
    const { navigation } = this.props;
    const category = navigation.getParam('cat');
    return <View><Text>
{category.name}
    </Text>
      </View>;
  }
}

export default Category;