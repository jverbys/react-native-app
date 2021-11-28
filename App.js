import React from 'react';
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataScreen from "./screens/DataScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Credentials"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Data"
                    component={DataScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
