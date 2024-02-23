import React from "react";
import { View,Text, StyleSheet } from "react-native";


const Splash = ()=>{

    return(
        <View style={styles.background}>
            <Text style={styles.textstyle}>ILPex</Text>
        </View>
    )

};


const styles = StyleSheet.create({

    background:{
        backgroundColor:'#8518FF',
        height:1000,

    },
    textstyle:{
        fontFamily: 'Cochin',
        justifyContent: 'center',
        textAlign: 'center',
        color:'white',
        fontWeight:'500',
        fontSize:50,
        marginTop:350
    },

});

export default Splash;