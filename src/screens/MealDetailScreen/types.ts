import { NavigationStackProp } from 'react-navigation-stack';

export interface IParams {
  mealTitle: string;
  mealId: string;
  toggleFav(): void;
}

export interface IProps {
  navigation: NavigationStackProp<IParams>;
}
