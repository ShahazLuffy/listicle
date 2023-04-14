import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AllColor} from '../../utils/colors';

const {width} = Dimensions.get('window');

console.log('width=>', width);

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    paddingVertical: 4,
  },

  title: {
    color: AllColor.textGray,
    paddingVertical: 2,
    //paddingLeft: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: (width - 64) / 2,
    height: 100,
    borderRadius: 8,
  },
  price: {
    color: AllColor.black,
    paddingBottom: 8,
    //paddingLeft: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
