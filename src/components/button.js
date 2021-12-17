import React from "react";
import {StyleSheet, TouchableNativeFeedback, Text, View} from "react-native";

export default function Button(props){
    let {children, labelStyle, onPress} = props;
    return (
        <TouchableNativeFeedback onPress={()=>{onPress();}}>
            <View style={styles.buttonContainer}>
                <Text style={[styles.buttonContent, labelStyle]}>{children}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonContent: {
        color: "white"
    }
});