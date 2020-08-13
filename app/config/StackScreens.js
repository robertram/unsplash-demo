import React from 'react';

import Options from '../screens/Options';
import Home from '../screens/Home';
import ImageDetails from '../screens/ImageDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';


const MainStack = createStackNavigator();
const OptionsStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => (
  <MainStack.Navigator >
    <MainStack.Screen name="Home" component={Home}
      options={{
        headerShown: false,
        title: 'Home',
        headerLeft: () => (
          <Feather name="menu" size={24} color="black" style={{ marginHorizontal: 10, }} onPress={() => { navigation.openDrawer() }} />
        )
      }}
    />
    <MainStack.Screen name="ImageDetails" component={ImageDetails}
      options={{
        headerShown: false,
        title: 'Home',
        headerLeft: () => (
          <Feather name="menu" size={24} color="black" style={{ marginHorizontal: 10, }} onPress={() => { navigation.openDrawer() }} />
        )
      }} />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

export const OptionsStackScreen = ({ navigation }) => (
  <OptionsStack.Navigator>
    <OptionsStack.Screen name="Options" component={Options}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Feather name="menu" size={24} color="black" style={{ marginHorizontal: 10, }} onPress={() => { navigation.openDrawer() }} />
        )
      }} />
  </OptionsStack.Navigator>
);