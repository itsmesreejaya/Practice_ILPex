import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BatchCardComponent from "./cards/BatchCard";
const BatchPage = () => {


    return(
        <View style={styles.page}>
            <BatchCardComponent
            batchName="ILP 2023-24 Batch 1"
            traineeNo="20"
            date="20 Oct 2023"
            />
            <BatchCardComponent
            batchName="ILP 2023-24 Batch 1"
            traineeNo="20"
            date="20 Oct 2023"
            /><BatchCardComponent
            batchName="ILP 2023-24 Batch 1"
            traineeNo="20"
            date="20 Oct 2023"
            /><BatchCardComponent
            batchName="ILP 2023-24 Batch 1"
            traineeNo="20"
            date="20 Oct 2023"
            />
        </View>
    )

}


const styles = StyleSheet.create({

    page:{
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'white',
        height:"100%",
        // marginTop:10,
        paddingTop: 60,
    }

})

export default BatchPage;