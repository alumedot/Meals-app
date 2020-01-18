import React from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { Colors } from 'constants';

import { IProps } from './types';


const FilterSwitch = (props: IProps) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        thumbColor={Platform.OS === 'android' ? Colors.PrimaryColor : ''}
        trackColor={{false: '', true: props.trackColor || Colors.PrimaryColor}}
        value={props.filterValue}
        onValueChange={value => props.onChange(value)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

export default FilterSwitch;
