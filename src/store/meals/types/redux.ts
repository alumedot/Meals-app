import { IMeal } from 'data/types';
import { ActionTypes } from './ActionTypes';
import { IFilters } from './instance';


export interface IReduxStore {
  meals: IMeal[],
  filteredMeals: IMeal[],
  favoriteMeals: IMeal[],
}

export interface IToggleFavorite {
  type: ActionTypes.ToggleFavorite;
  mealId: string;
}

export interface ISetFilters {
  type: ActionTypes.SetFilters;
  filters: IFilters;
}

export type IAction =
  IToggleFavorite |
  ISetFilters;
