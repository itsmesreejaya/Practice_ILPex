import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../screens/forgotPassword';
import Login from '../screens/login';
import ResetPassword from '../screens/resetpassword';
import Splash from '../screens/splash';


const StackNav = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      
    </StackNav.Navigator>
  );
};


export default HomeStackNavigation;