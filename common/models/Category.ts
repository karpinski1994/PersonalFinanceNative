import {Outcome} from './Outcome'

export interface Category {
  id: String;
  category: String;
  title: String;
  budgetPercent: Number;
  outcomesList: Array<Outcome>;
}