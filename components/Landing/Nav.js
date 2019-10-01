import React from 'react';
import { 
    StyleSheet, 
    Text,
    View, 
    Image,
    Button,
    Alert,
 } from 'react-native';



export default function Nav() {
  return (
    
    <View style={navContainer.container}>
      <Image source={require('../../assets/photoLogo.png')} style={photoLogo.container} />    
      
      <View style={loginButton.container}>
        <Button
            style={{color: "white"}}
            title="Login"
            onPress={() => Alert.alert('Login is not yet working. We are sorry for the inconvienence')}
        />
      </View>
    </View>
  );
}

const navContainer = StyleSheet.create({
    container: {
        position: "absolute" ,
        top: 0 ,
        backgroundColor: "#364F6B",
        width: "100%",
        height: 110 ,
        flexDirection: "row",
        justifyContent: "space-evenly" ,
        alignItems: "center",
        borderBottomColor: "yellow",
        borderBottomWidth: 1
        
    }
})
const photoLogo = StyleSheet.create({
  container: {
    height: 60 ,
    width: 150 ,
  } ,
});

const loginButton = StyleSheet.create({
    container: {
      backgroundColor: "#FC5185" ,
      color: "white" ,
      borderRadius: 4,
      width: 100,
      height: 40,
      marginTop: 15
      
    } ,
  });


