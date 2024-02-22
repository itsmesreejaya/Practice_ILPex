import React, {useState} from 'react';
import {View,Text, TextInput, StyleSheet, Pressable, TouchableOpacity,} from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { Link } from '@react-navigation/native';

const Login = () => {


  const handleLogin = () => {
    // Implement your login logic here
    // You can use the entered email and password to perform authentication
    console.log('Login button pressed');
  };

  return (
    
    <View style={styles.centered}>
      <Text style={styles.heading}>Login</Text>
      <InputBox
        secureValue={false}
        inputboxname="Email"
        placeholdervalue="Enter email"
      />
      <InputBox
        secureValue={true}
        inputboxname="Password"
        placeholdervalue="Enter Password"
      />
      <Link to={{screen:'forgotPassword'}} style={styles.baseText}>Forgot Password?</Link>
      <Button onPress={handleLogin} buttontext='Login'/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    // flex: 1,
    marginTop:120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseText: {
    fontFamily: 'Cochin',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Cochin',
    fontSize: 30,
    padding: 30,
    color:'black'
  },
});

export default Login;
