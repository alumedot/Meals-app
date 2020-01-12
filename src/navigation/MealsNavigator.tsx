import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from 'screens/CategoriesScreen';
import CategoryMealScreen from 'screens/CategoryMealsScreen';
import FavoritesScreen from 'screens/FavoritesScreen';

import MealDetailScreen from 'screens/MealDetailScreen';
import { Colors } from 'constants';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.PrimaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.PrimaryColor,
    },
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: tabInfo => {
                return (
                  <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                )
            }
        },
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                  <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                )
            }
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.AccentColor,
    }
});

export default createAppContainer(MealsFavTabNavigator);
