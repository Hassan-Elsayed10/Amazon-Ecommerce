import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

interface productItemProps {
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
const ProductItem = ({ item }: productItemProps) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ProductDetails', { id: item.id });
    };
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.rightcontainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                {/* render rateing */}
                <View style={styles.rate}>

                    {[0, 0, 0, 0, 0].map((el, i) =>
                        <FontAwesome style={styles.star}
                            key={`${item.id} - ${i}`}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={18}
                            color={'#e47911'} />
                    )}

                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>from ${item.price}
                    {item.oldPrice && <Text style={styles.oldprice}> ${item.oldPrice}</Text>} </Text>
            </View>

        </Pressable>
    );
};

export default ProductItem;