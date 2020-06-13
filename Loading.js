import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default function Loading () {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
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
        color: "#2C2C2C",
        fontSize: 30,
    }
});