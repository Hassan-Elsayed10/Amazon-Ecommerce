import React from "react";
import { FlatList, View } from "react-native";
import ProductItem from "../../components/Productitems";
import products from "../../data/products";
const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
};

export default HomeScreen;