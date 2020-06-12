import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from "expo-location";
import Loading from './Loading';

export default class App extends React.Component {
  state = {
    isLoading: true,
    latitude: 0,
    longitude: 0,
  }
  
  getGeolocation = async() => {
    try {

      // throw Error();

      await Location.requestPermissionsAsync();

      const {
        coords : {
          latitude, longitude
        }
      } = await Location.getCurrentPositionAsync(); 

      this.setState({
        isLoading : false,
        latitude : latitude,
        longitude : longitude,
      });

    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }

    
  }

  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    const {isLoading} = this.state;
    return (
      isLoading ? null : <Loading />
    );
  }
}

const styles = StyleSheet.create({

});