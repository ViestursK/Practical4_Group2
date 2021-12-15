import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import List from "../Screens/List";


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen name="Home" component={Home} />
    <Screen name="List" component={List} />
  </Navigator>
);

export const AppNavigator = () => (
    
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
  
);