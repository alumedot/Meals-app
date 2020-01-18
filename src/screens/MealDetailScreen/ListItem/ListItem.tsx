import React from 'react';
import { View, StyleSheet } from 'react-native';

import DefaultText from 'components/DefaultText';
import { Colors } from 'constants';

import { IProps } from './types';


const ListItem = (props: IProps) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>
        {props.children}
      </DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 3,
    borderLeftColor: Colors.AccentColor,
    borderRadius: 10,
    padding: 10,
  }
});

export default ListItem;
