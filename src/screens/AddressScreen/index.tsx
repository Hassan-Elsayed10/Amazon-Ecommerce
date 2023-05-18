import React from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import countryList from "country-list";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import styles from "./styles";
import Bottun from "../../components/Bottun";
const AddressScreen = () => {
    const countries = countryList.getData();
    console.log(countries);
    const [country, setcountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const [city, setCity] = useState('');
    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Fix all field errors before submiting');
            return;
        }

        if (!fullname) {
            Alert.alert('Please fill in the fullname field');
            return;
        }

        if (!phone) {
            Alert.alert('Please fill in the phone number field');
            return;
        }
    };

    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is too short');
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={(itemValue) => setcountry(itemValue)}>
                        {countries.map((country: { name: string | undefined; code: any; }) => (<Picker.Item label={country.name} value={country.code} />))}
                    </Picker>
                </View>
                {/* Full name */}
                <View style={styles.row}>
                    <Text style={styles.label}>Full name (First and Last name)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Full name"
                        value={fullname}
                        onChangeText={setFullname}
                    />
                </View>
                {/* Phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={'phone-pad'}
                    />
                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError('');
                        }}
                    />
                    {!!addressError && (
                        <Text style={styles.errorLabel}>{addressError}</Text>
                    )}
                </View>

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>
                <Bottun title='On Click' onPress={onCheckout} />
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default AddressScreen;