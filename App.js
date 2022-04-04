import * as React from 'react';
import { Button,  TouchableOpacity,  Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeSrceen } from './app/Home/HomeSrceen';
import { AboutScreen } from './app/About/AboutScreen';
import { CustomDrawer } from './app/Home/CustomDrawer';


const Drawer = createDrawerNavigator();

const YourApp = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <CustomDrawer {... props} />}  screenOptions={{drawerStyle: { backgroundColor: 'white', width: 240, }, }} initialRouteName="OfflineLogin"  >
        <Drawer.Screen name="Todo" component={HomeSrceen} />
        <Drawer.Screen name="Aboute" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;