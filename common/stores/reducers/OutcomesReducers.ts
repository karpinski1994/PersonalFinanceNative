import { ADD_OUTCOME } from '../actions/OutcomesActions';

const INIT_OUTCOME = {
  id: 'string',
  name: 'string',
  price: 999,
  date: new Date(),
  category: 'General'
}
const INIT_OUTCOMES = [INIT_OUTCOME];

export const INIT_STATE = {
  outcomes: INIT_OUTCOMES,
  error: null,
}

export const outcomesReducer = (state = INIT_STATE, action: any) => {
  switch(action.type) {
    case ADD_OUTCOME : {
        return {
          ...state,
          outcomes: state.outcomes.concat(action.outcome),
        }
    }
    default: {
      return {...state}
    }
  }
}
