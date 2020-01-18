import React, { useEffect, useCallback } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import HeaderButton from 'components/HeaderButton';

import { Fonts } from 'constants';
import DefaultText from 'components/DefaultText';
import { IRootReduxState } from 'store/types';
import { toggleFavorite } from 'store/meals/actions';

import ListItem from './ListItem';
import { IProps, IParams } from './types';


const MealDetailScreen = (props: IProps) => {
  const availableMeals = useSelector(({ meals }: IRootReduxState) => meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image
        resizeMethod='resize'
        source={{uri: selectedMeal?.imageUrl}}
        style={styles.image}
      />
      <View style={styles.details}>
        <DefaultText>
          {selectedMeal?.duration}
        </DefaultText>
        <DefaultText>
          {selectedMeal?.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText>
          {selectedMeal?.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {
        selectedMeal?.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))
      }
      <Text style={styles.title}>Steps</Text>
      {
        selectedMeal?.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))
      }
    </ScrollView>
  )
};

MealDetailScreen.navigationOptions = (navigationData: NavigationStackScreenProps<IParams>) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 22,
    textAlign: 'center',
  }
});

export default MealDetailScreen;
