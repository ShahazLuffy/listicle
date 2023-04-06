import React from 'react';
import {StyleSheet} from 'react-native';
import {AllColor} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {marginBottom: 10},
  label: {
    fontSize: 18,
    fontWeight: 500,
    marginHorizontal: 16,
    color: AllColor.blue,
  },
  inputContainer: {
    borderWidth: 3,
    borderColor: AllColor.gray,
    borderRadius: 14,
    marginHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    //borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
  },
  image: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
});
