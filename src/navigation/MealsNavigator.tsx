import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { NavigationStackOptions } from 'react-navigation-stack';

import CategoriesScreen from 'screens/CategoriesScreen';
import CategoryMealScreen from 'screens/CategoryMealsScreen';
import FavoritesScreen from 'screens/FavoritesScreen';
import FiltersScreen from 'screens/FiltersScreen';

import MealDetailScreen from 'screens/MealDetailScreen';
import { Colors, Fonts } from 'constants';

import { ITabBarIcon } from 'navigation/types';


const defaultStackNavOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.PrimaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: Fonts.OpenSansBold,
  },
  headerBackTitleStyle: {
    fontFamily: Fonts.OpenSans,
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.PrimaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: ITabBarIcon) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        )
      },
      tabBarLabel: Platform.OS === 'android' && <Text style={{fontFamily: Fonts.OpenSansBold}}>Meals</Text>,
      tabBarColor: Colors.PrimaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: ITabBarIcon) => {
        return (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
        )
      },
      tabBarLabel: Platform.OS === 'android' && <Text style={{fontFamily: Fonts.OpenSansBold}}>Favorites</Text>,
      tabBarColor: Colors.AccentColor,
    },
  },
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(
    tabScreenConfig,
    {
      activeColor: 'white',
      shifting: true,
    }
  ) :
  createBottomTabNavigator(
    tabScreenConfig,
    {
      tabBarOptions: {
        labelStyle: {
          fontFamily: Fonts.OpenSansBold,
        },
        activeTintColor: Colors.AccentColor,
      }
    });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: 'Filters'
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.AccentColor,
      labelStyle: {
        fontFamily: Fonts.OpenSansBold
      }
    }
  }
);

export default createAppContainer(MainNavigator);
