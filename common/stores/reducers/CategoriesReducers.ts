import { combineReducers } from 'redux';

const INITIAL_STATE = {
  categories: [
    {
      id: 'adasadsdas',
      title: 'Own',
      budgetPercent: 20,
      outcomesList: [
        {
          id: '123132132',
          what: 'something',
          price: 20,
        }
      ],
    },
  ],
};


const categoryReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        categories,
      } = state;

      // Note that action.payload === friendIndex
      categories.push(action.payload);

      // Finally, update our redux state
      const newState = { categories };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
	categories: categoryReducer,
});