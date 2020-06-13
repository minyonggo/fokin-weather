import React from 'react';
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-lightning",
        bgdColors : ["#ffd89b","#19547b"]
    },
    Drizzle : {
        iconName : "weather-rainy",
        bgdColors : ["#89F7FE","#66A6FF"]
    },
    Rain : {
        iconName : "weather-pouring",
        bgdColors : ["#00C6FB","#005BEA"]
    },
    Snow : {
        iconName : "weather-snowy-heavy",
        bgdColors : ["#7DE2FC","#B9B6E5"]
    },
    Haze : {
        iconName : "weather-hazy",
        bgdColors : ["#89F7FE","#66A6FF"]
    },
    Fog : {
        iconName : "weather-fog",
        bgdColors : ["#4DA0B0","#D39D38"]
    },
    Clear : {
        iconName : "weather-sunny",
        bgdColors : ["#FEF253","#FF7300"]
    },
    Clouds : {
        iconName : "weather-cloudy",
        bgdColors : ["#D7D2CC","#304352"]
    },
}


export default function Weather ( {temp, condition} ) {
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].bgdColors}>
            <StatusBar barStyle="light-content" />
            <View style={styles.containerMaterialCommunityIcons}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={86} color="white" />
                <Text style={styles.temperature}>{temp}ºC</Text>
            </View>
            <View style={styles.containerWeatherInfo}>
                <Text style={styles.weatherInfo}>{condition}</Text>
                <Text style={styles.greetingWord}>Good Day with STAMPY!</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Haze",
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
        fontSize: "3rem",
        color: "white"
    },
    containerWeatherInfo : {
        flex: 1,
        justifyContent: "center",
        alignItems: "left",
        paddingHorizontal: 15
    },
    weatherInfo : {
        fontSize: "2rem",
        color: "white",
        marginBottom: 15
    },
    greetingWord : {
        fontSize: "1.5rem",
        color:"white",
    }
});