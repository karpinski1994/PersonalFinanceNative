import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import {Category} from '../../../models/Category';

import {ADD_CATEGORY} from '../../../stores/actions/CategoriesActions';

import {ScrollView} from 'react-native';

import GradientBg from '../../../components/GradientBg/GradientBg';
import ItemsList from '../../../components/ItemsList/ItemsList';
import AddCategoryForm from '../../../forms/AddCategoryForm';

class Categories extends Component<any>{

  render() {
    const {addCategory, categories} = this.props;
    return(
      <GradientBg>
        <AddCategoryForm addCategory={addCategory} categories={categories}/>
        <ScrollView>
          <ItemsList items={this.props.categories} navigation={this.props.navigation}/>
        </ScrollView>
        {/* <ErrorBox
          info={this.props.error ? `${this.props.error}` : null }
        /> */}
      </GradientBg>
    );
  }
}


// const styles = StyleSheet.create({
//   error: {
//     color: '#909770a0',
//     fontSize: 30,
//   }
// });


const mapStateToProps = (state: any) => {
    return {
      categories: state.categories.categories,
      error: state.error,
    }
};

const mapDisptachToProps = (dispatch: any) => {
  return {
    addCategory: (cat: Category) => dispatch({type: ADD_CATEGORY, category: cat})
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Categories);
