import { NavigationStackProp } from 'react-navigation-stack';

export interface IParams {
  categoryId: string;
}

export interface IProps {
  navigation: NavigationStackProp<IParams>;
}
