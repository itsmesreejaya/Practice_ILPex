import React, {useState} from 'react';
import {View,Text, TextInput, StyleSheet, Pressable, TouchableOpacity,} from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../networks/AuthenticationAPI';
import { setStringItem } from '../utils/Utils';
import Constants from '../utils/Constants';
import { userLogin } from '../context/userSlice';
import { useDispatch } from 'react-redux';



const Login = () => {

  const navigation = useNavigation();
  const [loginEmail, setEmail] = useState('');
  const [loginPassword, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const { success, statusCode, loginResp, errorMessage } = await loginUser({
        loginEmail,
        loginPassword,
      });

      console.log(success);

      if (success) {
        setStringItem(Constants.IS_LOGIN,'true')
        dispatch(userLogin(true))
        // navigation.navigate('HomeScreen', {});
      } else {
        // Handle unsuccessful login, maybe show an error message
        console.error('Login failed:', errorMessage);
      }
    } catch (error) {
      // Handle errors during login
      console.error('Error during login:', error);
    }
  };

  return (
    
    <View style={styles.centered}>
      <Text style={styles.heading}>Login</Text>
      <InputBox
        secureValue={false}
        inputboxname="Email"
        placeholdervalue="Enter email"
        onChangeText={(text) => setEmail(text)}
      />
      <InputBox
        secureValue={true}
        inputboxname="Password"
        placeholdervalue="Enter Password"
        onChangeText={(text) => setPassword(text)} 
      />
      <Link to={{screen:'forgotPassword'}} style={styles.baseText}>Forgot Password?</Link>
      <Button onPress={handleLogin} buttontext='Login'/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
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
