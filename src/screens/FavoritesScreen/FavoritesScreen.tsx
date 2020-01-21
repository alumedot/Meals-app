import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from 'components/MealList';

import { IProps } from './types';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { screenHeader } from 'components/helpers/screenHeader';
import DefaultText from 'components/DefaultText';

import { IRootReduxState } from 'store/types';


const FavoritesScreen = (props: IProps) => {
  const favMeals = useSelector(({ meals }: IRootReduxState) => meals.favoriteMeals);

  return (
    favMeals.length === 0 || !favMeals ? (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    ) : (
      <MealList
        listData={favMeals}
        navigation={props.navigation}
      />
    )
  );
};

FavoritesScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => (
  screenHeader(navigationData, 'Your Favorites')
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
