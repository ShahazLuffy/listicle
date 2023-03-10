import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderColor: AllColor.gray,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },

  innerContainer: {
    backgroundColor: AllColor.gray,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 22,
    height: 22,
  },
});
