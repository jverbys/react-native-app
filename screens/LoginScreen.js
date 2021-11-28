import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function LoginScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const createTwoButtonAlert = () =>
        Alert.alert(
            'Not enough data!',
            'Please enter your first and last names',
            [
                { text: "OK" }
            ]
        );

    const checkData = () => {
        if (firstName === '' || lastName === '') {
            createTwoButtonAlert();
        }

        navigation.navigate('Data', {
            firstName: firstName,
            lastName: lastName,
        });
    }

    return (
        <View style={styles.view}>
            <Text>First name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setFirstName}
                value={firstName}
            />
            <Text>Last name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setLastName}
                value={lastName}
            />

            <View style={{ marginTop: 20 }}>
                <Button
                    title="Save"
                    onPress={() => checkData()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
