import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { IProps, IParams } from './types';
import { IMeal} from 'data/types';
import { Categories, Meals } from 'data/dummy-data';

import { Routes } from 'navigation/constants';
import MealItem from 'components/MealItem';


const CategoryMealScreen = (props: IProps) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = Meals.filter(meal => meal.categoryIds.find(id => id === catId));

  const renderMealItem = (itemData: ListRenderItemInfo<IMeal>) => {
    const {duration, title, affordability, complexity, imageUrl} = itemData.item;

    return (
      <MealItem
        imageUrl={imageUrl}
        complexity={complexity}
        affordability={affordability}
        duration={duration}
        title={title}
        onSelectMeal={() => {
          props.navigation.navigate(
            Routes.MealDetail,
            {
              mealId: itemData.item.id,
            }
          )
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  }
});

export default CategoryMealScreen;
