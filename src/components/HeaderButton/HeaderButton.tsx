import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from 'constants';

import { IProps } from './types';


const CustomHeaderButton = (props: IProps) => {
  return <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : Colors.PrimaryColor}
  />
};

export default CustomHeaderButton;
