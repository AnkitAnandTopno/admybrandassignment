
import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';

//containers
import {FirstPage} from "./src/containers/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FirstPage/>
      <StatusBar style="light"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
