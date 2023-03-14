import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../../utils/colors';

export const styles = StyleSheet.create({
  cointainer: {padding: 10, flexDirection: 'column', justifyContent: 'center'},
  image: {
    marginTop: 100,
    width: '100%',
    height: 226,
  },
  titleContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  splashFirst: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: AllColor.black,
  },
  splashSecond: {
    fontSize: 40,
    fontWeight: 'bold',
    color: AllColor.orange,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  splashThird: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: AllColor.black,
  },
  footerText: {
    color: AllColor.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
