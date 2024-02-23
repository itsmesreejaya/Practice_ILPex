import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ForgotPassword from '../screens/forgotPassword';
import Login from '../screens/login';
import ResetPassword from '../screens/resetpassword';
import Splash from '../screens/splash';
import HomeStackNavigationscreen from './AppNavigation';


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