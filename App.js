import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Nav from './components/Landing/Nav.js';
import Landing from './components/Landing/Landing.js';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Nav />
      <Landing />
      
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58C3F2' ,
    alignItems: 'center' ,
    justifyContent: 'center' ,
  } ,
});
