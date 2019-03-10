import {INIT_STATE} from '../InitState';
import { ADD_CATEGORY } from '../actions/CategoriesActions';

export const categoriesReducer = (state = INIT_STATE, action: any) => {
  switch(action.type) {
    case ADD_CATEGORY : {
      if (state.categories.findIndex(c => c.name === action.category.name) === -1) {
        return {
          ...state,
          categories: state.categories.concat(action.category),
        }
      } else {
        return {
          ...state,
          error: 'Cant use same name',
        }
      }
    }
    default: {
      return {...state}
    }
  }
}
