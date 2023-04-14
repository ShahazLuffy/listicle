import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: AllColor.lightGray,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
  title: {
    color: AllColor.gray,
    marginLeft: 16,
  },
});
