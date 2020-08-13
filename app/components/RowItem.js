import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.text,
    fontSize: 16,
    marginHorizontal: 10,
    color: colors.white,
  },
  optionsText:{
    color: colors.black,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const RowItem = ({ title, onPress, rightIcon, leftIcon, options }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    {leftIcon}
    <Text style={ (options===true) ? styles.title : styles.optionsText} >{title}</Text>
    {rightIcon}
  </TouchableOpacity>
);

export const RowSeparator = () => <View style={styles.separator} />;