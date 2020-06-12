import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subView} />
      <View style={styles.mainView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subView: {
    flex: 1,
    backgroundColor: "#B6DAE4"
  },
  mainView : {
    flex: 4,
    backgroundColor: "#E6F0F8"
  }
});