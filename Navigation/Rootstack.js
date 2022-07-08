import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import App from "../App";
import Details from "./Details";
const Root=()=>{
    const Stack=createStackNavigator();
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={App}></Stack.Screen>
            <Stack.Screen name="Details" component={Details}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default Root;