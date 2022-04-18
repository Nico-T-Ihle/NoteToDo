import * as React from 'react';
import { Button,  TouchableOpacity,  Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeSrceen } from './app/Home/HomeSrceen';
import { AboutScreen } from './app/About/AboutScreen';
import { CustomDrawer } from './app/Home/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';


const Drawer = createDrawerNavigator();

const YourApp = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <CustomDrawer {... props} />}
       screenOptions={{ drawerStyle: { backgroundColor: 'white', width: 240,}, drawerLabelStyle: { marginLeft: -25 },
        drawerActiveBackgroundColor: '#282828',
        drawerActiveTintColor: '#2e6cf0',
        drawerInactiveTintColor: '#000'
        }} initialRouteName="OfflineLogin"  >
        <Drawer.Screen name="Todo" component={HomeSrceen}  options={{
          drawerIcon: ({color}) => (
            <Icon name='home' size={22} color={color} />
          )
        }} />
        <Drawer.Screen name="Aboute" component={AboutScreen}  options={{
          drawerIcon: ({color}) => (
            <Icon name='person' size={22} color={color} />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;

// reminder it drawer only works for idk reason when you use this kind of syntax export function CustomDrawer(props) {