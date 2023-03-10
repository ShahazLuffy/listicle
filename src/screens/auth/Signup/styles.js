import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../../utils/colors';

export const styles = StyleSheet.create({
  cointainer: {
    padding: 14,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    marginHorizontal: 10,
    color: AllColor.blue,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
  },
});
