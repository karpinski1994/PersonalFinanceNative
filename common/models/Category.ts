import {Outcome} from './Outcome'

export interface Category {
  id: String;
  category: String;
  name: String;
  budgetPercent: Number;
  outcomesList: Array<Outcome>;
}