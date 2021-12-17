import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, ListItem, TextInputBox } from "../components";
import {randomString, filterBySearchSubString} from "../util/util";

class FirstPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            textList: [],
            searchList: []
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleTextChange(text){
                        
        let {textList} = this.state;
        this.setState({searchList: filterBySearchSubString(textList, text)});
    }
    handleAdd(){
        let {textList} = this.state;
        let newTextList = textList;
        newTextList.push(randomString(50));
        this.setState({textList:newTextList, searchList: newTextList});
    }
    handleDelete(item){
        let {textList, searchList} = this.state;
        let newTextList = textList&&textList.filter((text)=>{
            return item!==text;
        }), newSearchList = searchList&&searchList.filter((text)=>{
            return item!==text;
        });
        this.setState({searchList: newSearchList, textList: newTextList});
    }
    render(){
        let { textList, searchList} = this.state;
        return <View style={styles.container}>
            
        <View style={styles.header}>
                <View style={styles.headerInput}>
                    <TextInputBox placeholder="Search Item" onChange={this.handleTextChange}/>
                </View>
                <View style={styles.headerAdd}>
                    <Button labelStyle={{fontSize: 30}} onPress={this.handleAdd}>+</Button>
                </View>
            
                
                </View>
                <ScrollView keyboardShouldPersistTaps={"always"}>
                <View style={styles.content}>
                    {searchList.map((item, index)=>(
                        <View key={`${item}-${index}`}>
                        <ListItem onDelete={this.handleDelete}>{item}</ListItem>
                        </View>
                        ))}
                </View>     
                </ScrollView>   
        </View>;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        margin: 5,
        flexDirection: "row",
        height: 50
    },
    headerInput:{
        flex: 4,
        padding: 5
    },
    headerAdd:{
        flex: 1,
        padding: 5
    },
    content: {
    }
  });
export default FirstPage; 