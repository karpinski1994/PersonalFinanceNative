import {ADD_OUTCOME} from '../actions/OutcomesActions';
import {INIT_STATE} from '../InitState';



export const outcomesReducer = (state = INIT_STATE, action: any) => {
  switch(action.type) {
    case ADD_OUTCOME : {
      const curCatId = state.categories.findIndex(c => c.name === action.catTitle);
      const curCats = [...state.categories];
      if(curCatId > -1) {
        const curOutcomes = curCats[curCatId].outcomesList;
        curOutcomes.concat(action.outcome);
        curCats[curCatId].outcomesList = curOutcomes;
      }
      console.log('curCats', curCats)
      return {
        ...state,
        categories: curCats,
      }
    }
    default: {
      return {...state}
    }
  }
}