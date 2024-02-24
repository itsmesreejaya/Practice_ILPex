import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import TraineeScreen from '../screens/TraineeScreen';
import AssessmentScreen from '../screens/Assessment';

const BottomNav = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();


const HomeStackNavigationScreen = () =>{
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="HomeScreen"
        component={BottomStackNavigation}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  )
}


const BottomStackNavigation = () => {
  return (
    <BottomNav.Navigator
      tabBarOptions={{
        activeTintColor: '#8518FF', // Color when tab is active
        inactiveTintColor: 'gray', // Color when tab is inactive
        labelStyle: styles.label, // Style for the label text
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomNav.Screen
        name='Batches'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Batches',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />
      <BottomNav.Screen
        name='Trainees'
        component={TraineeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Trainees',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <BottomNav.Screen
        name='Assessments'
        component={AssessmentScreen}
        options={{
          tabBarLabel: 'Assessments',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note-plus" color={color} size={26} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16, 
  },
  tabBar: {
    height: 70, 
  },
  
});

export default HomeStackNavigationScreen;
