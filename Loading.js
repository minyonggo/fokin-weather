import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Loading ( {main, description}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting The Weather</Text>
            <Text>Weather : {main} Description : {description}</Text>
        </View>
    );
}

Loading.propTypes = {
    main: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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