import React from "react";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import Quantaty from '../QuantatySelection';

interface CartItemProps {
    cartitem: {
        id: string;
        quantity: number;
        option?: string;
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice?: number;
        };
    };

};
const CartItem = ({ cartitem }: CartItemProps) => {
    const { quantity: quantityprop, item } = cartitem;
    const [Quantity, setquantity] = useState(quantityprop);

    return (
        <View style={styles.box}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: cartitem.item.image }} />

                <View style={styles.rightcontainer}>
                    <Text style={styles.title} numberOfLines={3}>{cartitem.item.title}</Text>
                    {/* render rateing */}
                    <View style={styles.rate}>

                        {[0, 0, 0, 0, 0].map((el, i) =>
                            <FontAwesome style={styles.star}
                                key={`${cartitem.item.id} - ${i}`}
                                name={i < Math.floor(cartitem.item.avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color={'#e47911'} />
                        )}

                        <Text>{cartitem.item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>from ${cartitem.item.price}
                        {cartitem.item.oldPrice && <Text style={styles.oldprice}> ${cartitem.item.oldPrice}</Text>} </Text>


                </View>
            </View>
            <View style={styles.qunt}>
                <Quantaty quantity={Quantity} setQuantity={setquantity} />
            </View>
        </View>

    );
};

export default CartItem;