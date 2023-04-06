import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AllColor} from '../../utils/colors';
const {width} = Dimensions.get('window');

console.log('width=>', width);

export const styles = StyleSheet.create({
  container: {
    margin: 8,
  },

  image: {
    width: (width - 10) / 2,
    height: 200,
    borderRadius: 8,
  },
  title: {
    color: AllColor.textGray,
    paddingVertical: 8,
  },
  price: {
    color: AllColor.black,
    paddingBottom: 8,
  },
});
