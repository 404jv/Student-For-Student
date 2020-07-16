import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger'])

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

