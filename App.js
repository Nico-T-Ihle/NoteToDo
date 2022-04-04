import * as React from 'react';
import { Button,  TouchableOpacity,  Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeSrceen } from './app/Home/HomeSrceen';
import { AboutScreen } from './app/About/AboutScreen';


const Drawer = createDrawerNavigator();

const YourApp = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="OfflineLogin" screenOptions={{ headerShown: false, }} >
        <Drawer.Screen name="Todo" component={HomeSrceen} />
        <Drawer.Screen name="Aboute" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;