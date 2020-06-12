import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Loading () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting The Weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#FDF6AA",
        paddingHorizontal: 20,
        paddingVertical: 100,
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
    }
});