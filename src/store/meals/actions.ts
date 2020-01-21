import { ActionTypes } from './types/ActionTypes';
import { IFilters } from './types/instance';

export const toggleFavorite = (id: string) => {
  return {
    type: ActionTypes.ToggleFavorite,
    mealId: id,
  };
};

export const setFilters = (filterSettings: IFilters) => {
  return {
    type: ActionTypes.SetFilters,
    filters: filterSettings,
  };
};
