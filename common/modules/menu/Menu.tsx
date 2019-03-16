import React from 'react';
import {Component} from 'react';

import {StyleSheet} from 'react-native';

import MenuBtn from '../../components/MenuBtn/MenuBtn';
import GradientBg from '../../components/GradientBg/GradientBg';

class Menu extends Component<any>{

  render() {
    return(
      <GradientBg style={styles.container}>
      {/* we dont need categories in menu anymore */}
        <MenuBtn
          title="Categories"
          targetRoute="Categories"
        />
        <MenuBtn
          title="SomeMenu"
          targetRoute="Categories"
        />
        <MenuBtn
          title="Options"
          targetRoute="Categories"
        />
      </GradientBg>
    );
  }
}

// @todo refactor color
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Menu;