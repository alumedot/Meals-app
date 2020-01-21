import { NavigationStackProp } from 'react-navigation-stack';

export interface IParams {
  mealTitle: string;
  mealId: string;
  isFavorite: boolean;
  toggleFavorite(): void;
}

export interface IProps {
  navigation: NavigationStackProp<{}, IParams>;
}
