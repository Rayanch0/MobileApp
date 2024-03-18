import { StyleSheet,View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Home';
import tabs from '../ecrans/tabulations';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../Header';
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Routes2 from '../routes2';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const Routes = () => {
 
    return(
      /*<><View style={styles.Nav}>
      <Routes2/></View>*/
      <NavigationContainer>

        <Tab.Navigator
          initialRouteName="Home"

          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'powderblue' },
            tabBarLabel: () => null,
          }}
        >

          <Tab.Screen

            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="home" color={color} size={20} />
              ),
            }} />


          <Tab.Screen
            name="Livres"
            component={Home}
            options={{
              tabBarLabel: 'Livres',
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book-open-variant" color={color} size={20} />
              ),
            }} />
          <Tab.Screen
            name="peinture"
            component={Home}
            options={{
              tabBarLabel: 'Peinture',
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon name="paint-brush" color={color} size={20} />
              ),

            }} />
          <Tab.Screen
            name="scuplture"
            component={Home}
            options={{
              tabBarLabel: 'Scuplture',
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="hammer-screwdriver" color={color} size={20} />
              ),

            }} />
          <Tab.Screen
            name="Profile"
            component={Home}
            options={{
              tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={20} />
              ),
              tabBarLabel: () => null
            }} />
            <Tab.Screen
            name="Options"
            component={Home}
            options={{
              tabBarLabel: 'Options', tabBarIcon: ({ color, size }) => (
                <SimpleLineIcons name="options" color={color} size={20} />
              ),
              tabBarLabel: () => null
            }} />
        </Tab.Navigator>

      </NavigationContainer> //</>
      
    );
  
}
const styles = StyleSheet.create({
  Nav: {
    
    flex: 1,
    
  },
});
export default Routes 