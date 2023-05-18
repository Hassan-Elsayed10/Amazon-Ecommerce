import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import cart from "../../data/cart"
import CartItem from "../../components/CartItems";
import Bottun from "../../components/Bottun";
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('profile')
    }
    const totalprice = cart.reduce((preprice, currantprice) => preprice + currantprice.item.price * currantprice.quantity, 0);
    return (
        <SafeAreaView>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartItem cartitem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={styles.subtotal}> subtotal ({cart.length} items):
                            <Text style={styles.price}> ${totalprice.toFixed(2)}</Text>
                        </Text>
                        <Bottun title="go to Checkout" onPress={onPress} />
                    </View>
                )}
            />

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    subtotal: {
        fontSize: 18,
        fontWeight: 'normal',
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#e47911'
    }
});
export default CartScreen;