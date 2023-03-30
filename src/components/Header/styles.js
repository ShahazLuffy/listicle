import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: AllColor.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
    height: 24,
  },
});
