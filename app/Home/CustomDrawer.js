import * as React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableHighlight,Linking, ImageBackground } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Me from './Me.jpg';

export function CustomDrawer(props) {
  return (
    <View style={{flex: 1}} >
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#282828'}} > 
        <ImageBackground>
            <Image source={Me} style={{height: 80, width: 80, borderRadius: 20, marginBottom: 10, marginLeft: 15,marginTop: 10,}} />
            <Text style={{color: '#2e6cf0', fontSize: 18, marginLeft: 19,marginBottom: 25,}} >Nico Ihle</Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', }} >
          <View style={{marginTop: 30,}}>
            <DrawerItemList {...props}  />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}} >
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20,}} >
         
          <Text>Sign out </Text>
        
        </View>
      </View>
    </View>

  );
}


//this happens because the way you import or export it 