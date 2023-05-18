import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddressScreen from "../screens/AddressScreen";
import Entypo from 'react-native-vector-icons/Entypo'
import SignIn from "../screens/LogIn";
import HomeStack from "./Homestack";
import CartStack from "./CartStack";
const Tab = createBottomTabNavigator();
/*<Tab.Screen component={SignIn} name='Login'/>*/
const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: "#ffbd7d", tabBarInactiveTintColor: "#e47911" }}>
            <Tab.Screen
                component={HomeStack}
                name='Home'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" color={color} size={25} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                component={CartStack}
                name='Carts'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" color={color} size={25} />
                    ),
                    headerShown: false

                }}
            />
            <Tab.Screen
                component={AddressScreen}
                name='Account'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="user" color={color} size={25} />
                    ),
                    headerShown: false

                }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabs;