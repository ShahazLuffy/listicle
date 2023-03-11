import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Signup from './src/screens/auth/Signup';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Signin from './src/screens/auth/Signin';
//import Config from 'react-native-config';

const WEB_CLIENT_ID =
  '708570017135-c0fr9ojuqcg64mpa6qu4vd36nnp3ko3q.apps.googleusercontent.com';
const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <Signin />
    </SafeAreaView>
  );
};

export default App;
