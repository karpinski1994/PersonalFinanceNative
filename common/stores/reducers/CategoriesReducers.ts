
import { ADD_CATEGORY } from '../actions/CategoriesActions';

const INIT_CATEGORY = {
  id: 'asdsad',
  name: 'General',
  budgetPercent: 30,
}
const INIT_CATEGORY2 = {
  id: 'asdsasdad',
  name: 'Clothes',
  budgetPercent: 10,
}

const INIT_CATEGORIES = [INIT_CATEGORY, INIT_CATEGORY2];

export const INIT_STATE = {
  categories: INIT_CATEGORIES,
  error: null,
}


export const categoriesReducer = (state = INIT_STATE, action: any) => {
  switch(action.type) {
    case ADD_CATEGORY : {
      return {
        ...state,
        categories: state.categories.concat(action.category),
      }
    }
    default: {
      return {...state}
    }
  }
}
