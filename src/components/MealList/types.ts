import { IMeal } from 'data/types';
import { NavigationStackProp } from 'react-navigation-stack';

export interface IParams {
  categoryId: string;
}

export interface IProps {
  listData: IMeal[];
  navigation: NavigationStackProp<IParams>;
}
