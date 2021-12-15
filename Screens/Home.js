import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";


export default function Home ({navigation}){
    const pressHandler =()=>{
        navigation.navigate("NewsList");
    }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/greet.png')} style={styles.image}></Image>
        <Text style={styles.heading}>Wanna educate yourself?</Text>
        <Button
          title="Tap me, daddy ; )"
          onPress={pressHandler}
          color="darkorange"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    color:'black',
    marginTop: 50,
    marginBottom: 50,
  },
  background: {
    backgroundColor: "orange",
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
  },
  image: {
    height: 250,
    width: 300,
    marginTop: -200,
  }
});