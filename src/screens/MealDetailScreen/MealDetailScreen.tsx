import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { Meals } from 'data/dummy-data';
import HeaderButton from 'components/HeaderButton';

import { IProps, IParams } from './types';
import { Colors } from 'src/constants';


const MealDetailScreen = (props: IProps) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = Meals.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>
        {selectedMeal?.title}
      </Text>
      <Button
        title="Go back to Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  )
};

MealDetailScreen.navigationOptions = (navigationData: NavigationStackScreenProps<IParams>) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = Meals.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => console.log('Mark as favorite!')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MealDetailScreen;
