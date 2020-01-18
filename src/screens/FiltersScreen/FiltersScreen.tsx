import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { screenHeader } from 'components/helpers/screenHeader';
import HeaderButton from 'components/HeaderButton';

import { Fonts, Colors } from 'constants';

import FilterSwitch from './FilterSwitch';
import { IProps } from './types';


const FiltersScreen = (props: IProps) => {
  const { navigation } = props;

  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isVegan,
      isVegetarian,
      isGlutenFree,
      isLactoseFree,
    };
  }, [isVegan, isVegetarian, isGlutenFree, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Available Filters / Restrictions
      </Text>
      <FilterSwitch
        trackColor={Colors.VeganColor}
        label="Vegan"
        filterValue={isVegan}
        onChange={setIsVegan}
      />
      <FilterSwitch
        label="Vegetarian"
        filterValue={isVegetarian}
        onChange={setIsVegetarian}
      />
      <FilterSwitch
        label="Gluten-free"
        filterValue={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        filterValue={isLactoseFree}
        onChange={setIsLactoseFree}
      />
    </View>
  )
};

FiltersScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => (
  screenHeader(
    navigationData,
    'Filter Meals',
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Save"
        iconName="ios-save"
        onPress={navigationData.navigation.getParam('save')}
      />
    </HeaderButtons>
  )
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  }
});

export default FiltersScreen;
