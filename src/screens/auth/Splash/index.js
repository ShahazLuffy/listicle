import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = () => {
  // return [
  //   <Image
  //     style={styles.image}
  //     source={require('../../../assets/10050_1.png')}
  //   />,
  //   <Text>You Will Find All You Need Here</Text>,
  // ];
  return (
    <View style={styles.cointainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/10050_1.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.splashFirst}> You Will </Text>
        <Text style={styles.splashSecond}> Find All You Need </Text>
        <Text style={styles.splashThird}> Here</Text>
      </View>
      <Button title="sign up" />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}> Sign In </Text>
      </Pressable>
    </View>
  );
};

export default Splash;
