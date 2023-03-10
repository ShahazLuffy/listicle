import React, {useState} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.cointainer}>
      <AuthHeader title="sign up" />
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
    </View>
  );
};

export default Signup;
