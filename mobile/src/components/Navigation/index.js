import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../Menu";
import SearchTopic from '../../pages/SearchTopic';
import Matters from '../../pages/Matters';

const AppStack = createStackNavigator();

const Navigation = () => {
  return (
    <AppStack.Navigator
      headerMode="none"
    >
      <AppStack.Screen name="Menu"        component={Menu}/>
      <AppStack.Screen name="SearchTopic" component={SearchTopic}/>
      <AppStack.Screen name="Matters"     component={Matters}/>
    </AppStack.Navigator>
  );
};

export default Navigation;