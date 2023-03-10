import React from 'react';
import {Pressable, Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} hitSlop={20}>
        <Image style={styles.image} source={require('../../assets/icon.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default React.memo(AuthHeader);
