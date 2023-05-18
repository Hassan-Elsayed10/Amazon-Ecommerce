import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import product from "../../data/product";
import { Picker } from '@react-native-picker/picker';
import Quantaty from "../../components/QuantatySelection";
import Button from "../../components/Bottun";
import ImageCursuole from "../../components/Imagecursuole";
const ProductScreen = () => {
    const [selected, setSelected] = useState('');
    const [quantaty, setQuantaty] = useState(0);

    console.log(selected);
    return (

        <ScrollView style={styles.root}>
            {/* Title */}
            <Text style={styles.title}>{product.title}</Text>
            {/* image cursul */}
            <ImageCursuole images={product.images} />

            {/* option selector */}
            <Picker
                selectedValue={selected}
                onValueChange={(itemValue) => setSelected(itemValue)}>
                {product.options.map(option => (<Picker.Item label={option} value={option} />))}
            </Picker>
            {/* price */}
            <Text style={styles.price}>from ${product.price}
                {product.oldPrice && <Text style={styles.oldprice}> ${product.oldPrice}</Text>} </Text>

            {/* describtion */}
            <Text style={styles.description}>{product.description}</Text>
            {/* quantaty selector */}
            <Quantaty quantity={quantaty} setQuantity={setQuantaty} />
            {/* Bottun */}
            <Button title={'Add to cart'} onPress={() => { console.warn('add to cart'); }} />
            <Button title={'Buy Now'} onPress={() => { console.warn('Buy Now'); }} />

        </ScrollView>
    );
};


const styles = StyleSheet.create({
    price: {
        fontWeight: 'bold',
        fontSize: 18
    },
    oldprice: {
        fontSize: 15,
        textDecorationLine: 'line-through',
        fontWeight: 'normal'
    },

    description: {
        marginVertical: 10,
        lineHeight: 20,
        fontSize: 18,

    },
    root: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10

    },
    title: {
        fontSize: 18,
    }

});


export default ProductScreen;