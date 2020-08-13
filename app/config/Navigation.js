import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeStackScreen, OptionsStackScreen } from './StackScreens';

const Drawer = createDrawerNavigator();

const MainStackScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Options" component={OptionsStackScreen} />
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);