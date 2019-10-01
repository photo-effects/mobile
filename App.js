import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Nav from './components/Landing/Nav.js';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Nav />
      <Text>Make Your Next Design A Breeze!</Text>
      
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
