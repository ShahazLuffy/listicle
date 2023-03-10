import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AllColor.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    marginHorizontal: 25,
    marginVertical: 23,
    borderRadius: 3,
    borderWidth: 0.6,
    borderColor: '#234245',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: AllColor.white,
  },
});
