import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../ecrans/Home';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Routes2 = () => {
  return (
    <NavigationContainer>
<Drawer.Navigator initialRouteName="Feed" screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Feed"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Home}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Home}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>

    </NavigationContainer>
    
  );
}

export default Routes2

