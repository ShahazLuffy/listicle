import React, {useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const onEyePress = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.image}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eye_closed.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
export default React.memo(Input);
