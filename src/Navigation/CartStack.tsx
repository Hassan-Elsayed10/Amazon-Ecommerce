import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from "../screens/CartScreen";
import AddressScreen from "../screens/AddressScreen";
const Stack = createStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='homeScreen' component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name='profile' component={AddressScreen} />
        </Stack.Navigator>
    );
}

export default CartStack;