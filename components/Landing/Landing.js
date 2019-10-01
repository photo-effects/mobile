import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Landing() {
  return (
    
    <View style={styles.container}>
     
      <Text style={styles.headerText}>Make Your Next Design A Breeze!</Text>
      
      <View style={styles.video}>
        <Text style={styles.videoText}> - Insert Video Here - </Text>
      </View>

    </View>

    



  );
}



const styles = StyleSheet.create({
  container: {
    
    
    alignItems: 'center' ,
    justifyContent: 'center' ,
  } ,
  headerText: {
      flex: 0.6 ,
      fontSize: 50,
      textAlign: "center" ,
      color: "white"
  } ,
  video: {
      height: 200 ,
      width: 320 ,
      backgroundColor: "#5B62A5" ,
      justifyContent: "center" ,
      alignItems: "center"
  } ,
  videoText: {
    color: "white" ,
    fontSize: 20
  }
});
