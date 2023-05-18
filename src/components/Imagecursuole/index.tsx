import React, { useState, useCallback } from "react";

import { Image, View, FlatList, StyleSheet, useWindowDimensions } from "react-native";

const ImageCursuole = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const usewindow = useWindowDimensions().width;
    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
    }, []);
    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image style={[styles.image, { width: usewindow - 40 }]} source={{ uri: item }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={usewindow - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
            />
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View

                        style={[
                            styles.dot,
                            {
                                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
                            },
                        ]}
                    />

                ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 250,
        margin: 10,
        resizeMode: "contain"
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
    }
});
export default ImageCursuole;