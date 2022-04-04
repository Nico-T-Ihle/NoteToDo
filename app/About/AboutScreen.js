import * as React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableHighlight,Linking } from "react-native";

import HeaderImage from '../About/about-masthead.png';

import Me from '../Home/Me.png';

export function AboutScreen() {
  return (
    <View style={styles.box} > 
      <View >
        <Image style={styles.AboutmeHeaderImage} source={HeaderImage} />
        <Image style={styles.Me} source={Me} />
        <Text style={{color: 'white'}} >lLSdfjlsödkjföalskdjflöadskfjalöskdjfölaskdjfls</Text>
        <View style={styles.button_container} >
        <TouchableHighlight underlayColor="white"onPress={() => Linking.openURL('https://github.com/Nico-T-Ihle')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>GitHub</Text>
          </View>
        </TouchableHighlight>  

        <TouchableHighlight underlayColor="white"onPress={() => Linking.openURL('https://nico-t-ihle.github.io/NicoIhlePortfolio/')}>
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Aboute me</Text>
          </View>
        </TouchableHighlight>    
        </View>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  AboutmeHeaderImage: {
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,

  },

  Me: {
    width: '100%',
    height: '15%',
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 25,
  },

  AboutmeText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 15,
  },

  box: {
    backgroundColor: '#1a1a1a',
    height: '100%',
    borderWidth: 5,

  },

  button_container: {
    alignItems: 'center',
    top: 80,
  },

  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },

  button2: {
    marginTop: 15,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
  
});

//this happens because the way you import or export it 