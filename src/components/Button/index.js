import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, style}) => {
  console.log('inside button');
  return (
    // <Pressable onPress={handleButton} hitSlop={10} style={styles.container}>
    //   {/* hit slot for around around the button to be clickable  */}
    //   {/* if u use touchableOpacity instead of Pressable the use can see what is being clicked */}
    //   <Text style={styles.text}> {title}</Text>
    // </Pressable>

    <TouchableOpacity
      activeOpacity={0.6}
      // activeOpacity a number between 0 and 1
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(Button);
