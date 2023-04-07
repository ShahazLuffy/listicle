import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

const CategoryBox = ({title, image, onPress, isFirst}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
export default React.memo(CategoryBox);
