import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Screen } from 'react-native-screens';

type propsType = {buttontext:string , onPress:()=>void};

const Button = (props:propsType) =>{
   const {buttontext, onPress}=props
return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={{color: 'white'}}>{buttontext}</Text>
      </TouchableOpacity> 
)
}


const styles = StyleSheet.create({
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 200,
        // elevation: 3,
        padding: 10,
        backgroundColor: '#8518FF',
        marginTop: 20,
      },
})

export default Button;