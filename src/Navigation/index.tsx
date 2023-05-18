import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabs from "./HomeTabs";
import SignIn from "../screens/LogIn";
interface productItemProps {
    isAuthenticated?: null
};

const Router = ({ isAuthenticated }: productItemProps) => {

    return (


        <NavigationContainer>


            {isAuthenticated ? <HomeTabs /> : <SignIn />}


        </NavigationContainer>
    );
}
export default Router;