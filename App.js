import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoadScreen from "./screens/LoadScreen"
import MapScreen from "./screens/MapScreen"


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions = {{
      headerShown: false
    }}>
        <Tab.Screen name = "Load" component = {LoadScreen}/>
        <Tab.Screen name = "Map" component = {MapScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}