import React, {useState} from 'react';
import {View,Text,TextInput,StyleSheet,Pressable,TouchableOpacity,} from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ResetPassword', {});
  };
  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Forgot Password?</Text>
      <Text style={styles.baseText}>
        {' '}
        To initiate the password reset process, kindly provide your email
        address below.
      </Text>
      <InputBox
        secureValue={false}
        inputboxname="Email"
        placeholdervalue="Enter email"
      />
      <Button onPress={onPress} buttontext="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    // flex: 1,
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Cochin',
    fontSize: 30,
    padding: 30,
    color: 'black',
  },
  baseText: {
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 250,
  },
});

export default ForgotPassword;
