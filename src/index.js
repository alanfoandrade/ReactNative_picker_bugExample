import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar, YellowBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './services/RootNavigation';

import './config/ReactotronConfig';
import colors from './styles/colors';

import App from './App';

YellowBox.ignoreWarnings(['Picker has been extracted from react-native core']);
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
]);

export default function Index() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <App />
    </NavigationContainer>
  );
}
