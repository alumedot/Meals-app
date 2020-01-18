import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { IProps, IParams } from './types';
import { Categories } from 'data/dummy-data';

import MealList from 'components/MealList';
import { IRootReduxState } from 'store/types';

const CategoryMealScreen = (props: IProps) => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state: IRootReduxState) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.find(id => id === catId));

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
    />
  )
};

CategoryMealScreen.navigationOptions = (navigationData: NavigationStackScreenProps<IParams>) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = Categories.find(category => category.id === catId);

  return {
    headerTitle: selectedCategory!.title,
  }
};

export default CategoryMealScreen;
