import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';

import { Categories } from 'data/dummy-data';
import { ICategory } from 'data/types';
import { Routes } from 'navigation/constants';

import CategoryGridTile from 'components/CategoryGridTile';

import { IProps } from './types';


const CategoriesScreen = (props: IProps) => {
  const renderGridItem = (itemData: ListRenderItemInfo<ICategory>) => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => props.navigation.navigate(
          Routes.CategoryMeals,
          {
            categoryId: itemData.item.id,
          }
        )}
      />
    )
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={Categories}
      renderItem={renderGridItem}
    />
  )
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;
