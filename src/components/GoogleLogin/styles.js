import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '45%',
    color: AllColor.darkGrey,
    borderRadius: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
  },
});
