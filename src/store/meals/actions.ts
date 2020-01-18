import { ActionTypes } from './types/ActionTypes';


export const toggleFavorite = (id: string) => {
  return {
    type: ActionTypes.ToggleFavorite,
    mealId: id,
  };
};
