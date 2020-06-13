import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Weather ( {temp, condition} ) {
    return (
        <View style={styles.container}>
            <View style={styles.containerMaterialCommunityIcons}>
                <MaterialCommunityIcons name="weather-rainy" size={86} color="black" />
                <Text style={styles.temperature}>{temp}ºC</Text>
            </View>
            <View style={styles.containerWeatherInfo}>
                <Text>{condition}</Text>
            </View>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Haze",
        "Dust",
        "Fog",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerMaterialCommunityIcons : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temperature : {
        fontSize: "3rem"
    },
    containerWeatherInfo : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});