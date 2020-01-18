import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from 'components/HeaderButton';
import { NavigationStackScreenProps } from 'react-navigation-stack';


export const screenHeader = (
  navigationData: NavigationStackScreenProps,
  headerTitle: string,
  headerRight?: JSX.Element,
) => {
  return {
    headerTitle: headerTitle,
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: headerRight,
  }
};
