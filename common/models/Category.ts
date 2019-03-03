import {Outcome} from './Outcome'

export interface Category {
  id: String;
  title: String;
  budgetPercent: Number;
  outcomesList: Array<Outcome>;
}