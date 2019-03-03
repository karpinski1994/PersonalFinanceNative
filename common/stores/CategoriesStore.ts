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
    default:
      return state
  }
};

export default combineReducers({
  categories: categoryReducer,
});