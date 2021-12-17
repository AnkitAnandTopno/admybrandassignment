import React from "react";
import {StyleSheet, TextInput} from "react-native";

export default function TextInputBox(props){
    let {placeholder, onChange} = props;
    return (
        <TextInput style={styles.textInput} placeholder={placeholder} onChangeText={(text)=>{onChange(text);}}/>
    );
}
const styles = StyleSheet.create({
    textInput: {
        height: "100%",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5
    }
});