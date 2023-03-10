import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: AllColor.blue,
    paddingHorizontal: 15,
  },
});
