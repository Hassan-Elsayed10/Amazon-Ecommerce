import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";



const Quantaty = ({ quantity, setQuantity }) => {
    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));

    };
    const onPlus = () => {
        setQuantity(quantity + 1);
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={onMinus} style={styles.Button}>
                <Text style={styles.textbutton}>-</Text>
            </Pressable>


            <Text style={styles.textvalue}>{quantity}</Text>

            <Pressable onPress={onPlus} style={styles.Button}>
                <Text style={styles.textbutton}>+</Text>
            </Pressable>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#e3e3e3',
        borderWidth: 1,
        width: 140,
    },
    Button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },

    textbutton: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    textvalue: {
        color: '#007eb9',
        fontWeight: 'bold',
        fontSize: 20
    }


});


export default Quantaty;