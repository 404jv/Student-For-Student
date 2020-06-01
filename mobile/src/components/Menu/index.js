import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'
 
const Tab =  createBottomTabNavigator();

import Home from '../../pages/Home';

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  }
}

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size}) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#212121',
          borderTopColor: 'rgba(255, 255, 255, 0.2)'
        },
        activeTintColor: '#1351D8',
        inactiveTintColor: '#92929C',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Hoje'
        }}
      />
    </Tab.Navigator>
  );
}
