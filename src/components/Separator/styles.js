import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: AllColor.lightGray,
  },
  text: {
    color: AllColor.blue,
    fontWeight: '500',
    marginHorizontal: 20,
  },
});
