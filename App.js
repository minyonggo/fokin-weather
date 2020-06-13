import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from "expo-location";
import Axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';

export default class App extends React.Component {
  state = {
    isLoading: true,
    main: "main_weather",
    temp: 0
  }  
  
  async getWeather(latitude, longitude) {
    const API_KEY = "3fcac35de4a9fd8c7b60370b4a8d23eb";
    const {
      data : {
        weather : [
          { main }
        ],
        main : { temp }
      }
    } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.setState({
      isLoading: false,
      main: main,
      temp: temp,
    });
  }

  async getGeolocation() {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords : {
          latitude, longitude
        }
      } = await Location.getCurrentPositionAsync(); 

      this.getWeather(latitude, longitude);
      
    } catch(error) {
      Alert.alert("Can't find you!", "So sad");
    }
  }


  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    const { isLoading, temp, main } = this.state;
    return (
      isLoading
      ? <Loading />
      : <Weather temp={Math.round(temp)} condition={main}/>
    );
  }
}

const styles = StyleSheet.create({

});