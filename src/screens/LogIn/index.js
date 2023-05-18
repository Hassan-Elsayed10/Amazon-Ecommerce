import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScaledSheet } from 'react-native-size-matters';

import axios from 'axios';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submit = () => {
        console.log('submited')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
                <Icon
                    name='person'
                    color='#000'
                    size={20}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
                <Icon
                    name='lock'
                    color='#000'
                    size={20}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { submit() }}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: '30@vs',
        width: "70%",
        height: '45@vs',
        marginBottom: '20@vs',
        flexDirection: 'row',
        paddingEnd: '20@vs',
        alignItems: 'center'
    },
    TextInput: {
        height: '50@vs',
        flex: 1,
        padding: '10@vs',
        marginLeft: '10@vs',
    },
    forgot_button: {
        height: '30@vs',
        marginBottom: '30@vs',
    },
    loginBtn: {
        width: "80%",
        borderRadius: '25@vs',
        height: '50@vs',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '40@vs',
        backgroundColor: "#FF1493",
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


export default SignIn;


