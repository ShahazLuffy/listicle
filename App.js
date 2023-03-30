import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Signup from './src/screens/auth/Signup';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Signin from './src/screens/auth/Signin';
import Splash from './src/screens/auth/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllColor} from './src/utils/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';

//import Config from 'react-native-config';

const WEB_CLIENT_ID =
  '708570017135-c0fr9ojuqcg64mpa6qu4vd36nnp3ko3q.apps.googleusercontent.com';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
class Tabss extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./src/assets/10050_1.png')
                : require('./src/assets/10050_1.png');
            } else if (route.name === 'Favorites') {
              iconName = focused
                ? require('./src/assets/10050_1.png')
                : require('./src/assets/10050_1.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('./src/assets/10050_1.png')
                : require('./src/assets/10050_1.png');
            }

            // You can return any component that you like here!
            return <Image style={{width: 24, height: 24}} source={iconName} />;
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
}
const Tabs = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>;
};
const App = () => {
  const isSignedIn = true;
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: AllColor.white,
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="Tabs"
              component={Tabss}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
