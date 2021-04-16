import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import rootScreens from '~/screens';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator initialRouteName="Users">
    <Tab.Screen name="Home" component={rootScreens.Home} />
    <Tab.Screen name="Users" component={rootScreens.Users} />
  </Tab.Navigator>
);
