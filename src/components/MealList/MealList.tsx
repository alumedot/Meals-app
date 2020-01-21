import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { IMeal } from 'data/types';
import { Routes } from 'navigation/constants';
import { IRootReduxState } from 'store/types';

import MealItem from '../MealItem';
import { IProps } from './types';


const MealList = (props: IProps) => {
  const favoriteMeals = useSelector(({meals}: IRootReduxState) => meals.favoriteMeals);

  const renderMealItem = (itemData: ListRenderItemInfo<IMeal>) => {
    const {duration, title, affordability, complexity, imageUrl} = itemData.item;
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

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
              mealTitle: itemData.item.title,
              isFavorite,
            }
          )
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  }
});

export default MealList;
