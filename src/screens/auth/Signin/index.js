import React, {useState} from 'react';
import {Text, ScrollView, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {AllColor} from '../../../utils/colors';

const Signin = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.cointainer}>
      <AuthHeader title="sign in" onBackPress={onBack} />

      <Input label="Email" placeholder="please enter a valid Email address" />
      <Input label="Password" placeholder="*******" isPassword />

      <Button style={styles.button} title="sign in" />
      <Separator text="or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.footerLink} onPress={onSignup}>
          Sign Up
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default Signin;
