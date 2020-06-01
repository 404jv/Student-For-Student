import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Menu from './pages/Home';

export default function Routes() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
