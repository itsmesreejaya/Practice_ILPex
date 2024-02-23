import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity,} from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import {Link} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = () => {


  const navigation = useNavigation();
  const [newPassword,setNewPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');



  const onPress = () => {
    navigation.navigate('login', {});
  };

  return (
    <View style={styles.centered}>
      <Text style={styles.heading}>Reset Password</Text>
      <InputBox
        secureValue={true}
        inputboxname="Password"
        placeholdervalue="Enter new Password"
        onChangeText={(text) => setNewPassword(text)}
      />
      <InputBox
        secureValue={true}
        inputboxname="Confirm Password"
        placeholdervalue="Confirm new Password"
        onChangeText={(text) => setConfirmPassword(text)}
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

  baseText: {
    fontFamily: 'Cochin',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Cochin',
    fontSize: 30,
    padding: 30,
    color: 'black',
  },
});

export default ResetPassword;
