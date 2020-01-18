import { IMeal } from 'data/types';
import { ActionTypes } from './ActionTypes';

export interface IReduxStore {
  meals: IMeal[],
  filteredMeals: IMeal[],
  favoriteMeals: IMeal[],
}

export interface IToggleFavorite {
  type: ActionTypes.ToggleFavorite;
  mealId: string;
}

export type IAction =
  IToggleFavorite;
