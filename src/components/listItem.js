import React from "react";
import {StyleSheet, TouchableNativeFeedback, Text, View} from "react-native";

export default function ListItem(props){
    let {onDelete, children} = props;
    return (
        <View>
            <View style={styles.listItemContainer}>
            <View style={styles.listItemContent}>
                <Text style={{flex: 1, flexWrap: "wrap"}}>{children}</Text>
                </View>
                <TouchableNativeFeedback onPress={()=>{onDelete(children)}}>
                <View style={{flex: 1, height: "100%", alignItems: "center", justifyContent: "center"}}>
                <Text>x</Text>
                    
                </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },
    listItemContent: {
        flex: 5,
        color: "black",
    }
});