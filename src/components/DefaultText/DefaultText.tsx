import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Fonts } from 'constants';

import { IProps } from './types';


const DefaultText = (props: IProps) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  )
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.OpenSans,
  },
});

export default DefaultText;
