import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type propsType = {inputboxname: string; placeholdervalue: string; secureValue:boolean};

const InputBox = (props: propsType) => {
  const {inputboxname, placeholdervalue,secureValue } = props;

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleText}>{inputboxname}</Text>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholdervalue}
        secureTextEntry ={secureValue}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },

  titleText: {
    fontSize: 15,
    color: 'black',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    padding: 10,
  },
  inputBox: {
    padding: 10,
    height: 40,
    color: 'black',
    
  },
});

export default InputBox;
