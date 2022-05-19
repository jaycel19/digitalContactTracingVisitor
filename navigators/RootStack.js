import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./../screens/Login";
import Register from "./../screens/Register";
import Home from "./../screens/Home";
import QrGenerate from "./../screens/QrGenerate";
import { AuthProvider } from "./../context/AuthContextProvider";
import { VisitorProvider } from "../context/VisitorContextProvider";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <AuthProvider>
                <VisitorProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="QrGenerate" component={QrGenerate} />
                        <Stack.Screen name="Register" component={Register} />
                    </Stack.Navigator>
                </VisitorProvider>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default RootStack;