import React from 'react';
import { useSelector } from 'react-redux';

import MealList from 'components/MealList';

import { IProps } from './types';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { screenHeader } from 'components/helpers/screenHeader';
import { IRootReduxState } from 'store/types';

const FavoritesScreen = (props: IProps) => {
  const favMeals = useSelector(({ meals }: IRootReduxState) => meals.favoriteMeals);

  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  )
};

FavoritesScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => (
  screenHeader(navigationData, 'Your Favorites')
);

export default FavoritesScreen;
