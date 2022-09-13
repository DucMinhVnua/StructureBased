import React from 'react';
import RootNavigator from './RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function RootContainer() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
