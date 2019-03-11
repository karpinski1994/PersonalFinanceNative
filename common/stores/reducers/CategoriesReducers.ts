
import { ADD_CATEGORY } from '../actions/CategoriesActions';

const INIT_CATEGORY = {
  id: 'asdsad',
  title: 'General',
  budgetPercent: 0,
  outcomesList: [
    {
      id: 'asdsaas',
      what: 'cable',
      price: 89.99,
    }
  ],
}
const INIT_CATEGORIES = [INIT_CATEGORY];

export const INIT_STATE = {
  categories: INIT_CATEGORIES,
  error: null,
}


export const categoriesReducer = (state = INIT_STATE, action: any) => {
  switch(action.type) {
    case ADD_CATEGORY : {
      if (state.categories.findIndex(c => c.title === action.category.title) === -1) {
        return {
          ...state,
          categories: state.categories.concat(action.category),
        }
      }
    }
    default: {
      return {...state}
    }
  }
}
