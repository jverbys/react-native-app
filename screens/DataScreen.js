import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function DataScreen({ route, navigation }) {
    const { firstName, lastName } = route.params;
    const [fact, setFact] = useState('');

    const getFact = () => {
        return fetch('https://chuck-norris-factapp.herokuapp.com/fact')
            .then((response) => response.json())
            .then((json) => {
                setFact(json.fact);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        getFact();
    }, []);

    return (
        <View style={styles.view}>
            <Text>You are: {firstName} {lastName}</Text>

            <View
                style={{ marginVertical: 8, borderBottomColor: '#737373', borderBottomWidth: StyleSheet.hairlineWidth}}
            />

            <Text style={{ marginTop: 30 }}>
                Here is some random Chuck Norris fact for you:
            </Text>

            <Text style={{ marginTop: 10, fontStyle: 'italic' }}>
                {fact}
            </Text>

            <View style={{ marginTop: 40 }}>
                <Button
                    title="Get new fact"
                    onPress={() => getFact()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 20,
    },
});
