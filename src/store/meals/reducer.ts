import { Meals } from 'data/dummy-data';
import { IReduxStore } from './types/redux';
import { IAction } from './types/redux';
import { ActionTypes } from './types/ActionTypes';


const initialState: IReduxStore = {
  meals: Meals,
  filteredMeals: Meals,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.ToggleFavorite:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavMeals,
        }
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal!),
        }
      }
    default:
      return state;
  }
};

export default mealsReducer;
