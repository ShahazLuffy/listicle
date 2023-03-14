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

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.cointainer}>
      <AuthHeader title="sign up" onBackPress={onBack} />
      <Input label="Name" placeholder="please enter your name" />
      <Input label="Email" placeholder="please enter a valid Email address" />
      <Input label="Password" placeholder="*******" isPassword />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with<Text style={styles.agreeTextBold}> Terms</Text> and{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>{' '}
        </Text>
      </View>
      <Button style={styles.button} title="sign up" />
      <Separator text="or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have account?{' '}
        <Text style={styles.footerLink} onPress={onSignIn}>
          sign in
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default Signup;
