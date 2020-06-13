import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from "expo-location";
import Loading from './Loading';
import Axios from 'axios';

export default class App extends React.Component {
  state = {
    isLoading: true,
    latitude: 0,
    longitude: 0,
    main: "main_weather",
    description: "description",
  }  
  
  getGeolocation = async() => {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords : {
          latitude, longitude
        }
      } = await Location.getCurrentPositionAsync(); 

      const API_KEY = "3fcac35de4a9fd8c7b60370b4a8d23eb";
      const {
        data : {
          weather : [
            { main, description }
          ]
        }
      } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);

      this.setState({
        isLoading: false,
        latitude: latitude,
        longitude: longitude,
        main: main,
        description: description
      });
      
    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    const { isLoading, main, description } = this.state;
    return (
      isLoading ? null : <Loading main={main} description={description}/>
    );
  }
}

const styles = StyleSheet.create({

});