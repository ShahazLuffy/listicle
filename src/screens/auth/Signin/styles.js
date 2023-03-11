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
  footerText: {
    color: AllColor.blue,
    marginBottom: 150,
    textAlign: 'center',
  },
  footerLink: {
    color: AllColor.blue,
    fontWeight: 'bold',
  },
});
