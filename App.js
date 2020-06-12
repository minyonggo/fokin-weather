import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
import Loading from './Loading';

export default class App extends React.Component {
  state = {
    latitude : 0,
    longitude : 0,
  }
  
  getGeolocation = async() => {
    const currentLocation = await Location.getCurrentPositionAsync(); 
    this.setState({
      latitude : currentLocation.coords.latitude,
      longitude : currentLocation.coords.longitude,
    });

    const {longitude, latitude} = this.state;
    console.log(latitude, longitude);
  }

  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    return (
      <Loading />
    );
  }
}

const styles = StyleSheet.create({

});