import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

import { Fonts } from 'constants';

import { IProps } from './types';


const CategoryGridTile = (props: IProps) => {

  const TouchableComponent: React.ElementType = Platform.OS === 'android' && Platform.Version >= 21 ?
    TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent activeOpacity={0.7} style={{flex: 1}} onPress={props.onSelect}>
        <View style={{
          ...styles.container,
          ...{backgroundColor: props.color},
        }}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  )
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 20,
    textAlign: 'right',
  }
});

export default CategoryGridTile;
