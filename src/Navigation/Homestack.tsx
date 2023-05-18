import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='homeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;