import React from "react";
import { View,Text } from "react-native";
import BatchCard from "../components/cards/BatchCard";
import BatchPage from "../components/BatchPage";
import { StyleSheet } from "react-native";
import ProfileComponent from "../components/profileComponent";


const HomeScreen = () => {

  const handleLogout = () => {
   
    console.log('Performing logout from HomeScreen');
  };
  

return(
    <View style={styles.backGroundStyle}>
        <ProfileComponent />
        <Text style={styles.headingStyle}>Batches</Text>
        <BatchPage/>
     </View>
)

}

const styles = StyleSheet.create({
    
    backGroundStyle: {
      backgroundColor: '#8518FF',
      height: '100%',
    },
    headingStyle: {
      fontFamily: 'Cochin',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 40,
      marginBottom:40,
    },
  });
  


export default HomeScreen;