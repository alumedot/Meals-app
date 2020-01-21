import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { Categories } from 'data/dummy-data';
import { IRootReduxState } from 'store/types';

import MealList from 'components/MealList';
import DefaultText from 'components/DefaultText';

import { IProps, IParams } from './types';


const CategoryMealScreen = (props: IProps) => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state: IRootReduxState) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.find(id => id === catId));

  return (
    displayedMeals.length === 0 ? (
      <View style={styles.content}>
        <DefaultText>No meals found, check your filters</DefaultText>
      </View>
    ) : (
      <MealList
        listData={displayedMeals}
        navigation={props.navigation}
      />
    )
  )
};

CategoryMealScreen.navigationOptions = (navigationData: NavigationStackScreenProps<IParams>) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = Categories.find(category => category.id === catId);

  return {
    headerTitle: selectedCategory!.title,
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMealScreen;
