import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
 
const Tab =  createBottomTabNavigator();

import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import Profile from '../../pages/Profile';

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },

  Settings: {
    lib: Feather,
    name: 'settings'
  },

  Profile: {
    lib: MaterialIcons,
    name: 'person'
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
          borderTopColor: 'rgba(0, 0, 0, 0.2)',
        },
        inactiveTintColor: '#202020',
        activeTintColor: '#808080', //
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
        }}
      />
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Hoje',
        }}
        
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Configuração',
        }}
      />
    </Tab.Navigator>
  );
}
