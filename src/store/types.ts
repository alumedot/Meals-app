import { IReduxStore as IMealsReduxStore } from './meals/types/redux';

export interface IRootReduxState {
  meals: IMealsReduxStore;
}
