import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
    },
    box: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
        margin: 10
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        margin: 5
    },
    rightcontainer: {
        flex: 3,
        padding: 10,
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    },
    oldprice: {
        fontSize: 15,
        textDecorationLine: 'line-through',
        fontWeight: 'normal'
    },
    rate: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    star: {
        margin: 2
    },
    qunt: {
        margin: 5,


    }
});
export default styles;