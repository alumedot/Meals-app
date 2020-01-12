import { NavigationStackProp } from 'react-navigation-stack';

export interface IParams {
  mealId: string;
}

export interface IProps {
  navigation: NavigationStackProp<IParams>;
}
