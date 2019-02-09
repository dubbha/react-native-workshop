/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createBottomTabNavigator, createTabNavigator, createAppContainer } from "react-navigation";

import FeedScreen from './screens/Feed';
import SecondScreen from './screens/Second';
import ThirdScreen from './screens/Third';

import { name as appName } from './app.json';

const TabNavigator = createBottomTabNavigator({
  Home: FeedScreen,
  Second: SecondScreen,
  Third: ThirdScreen,
}, {
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: {
    },
    style: {
    },
  },
});

AppRegistry.registerComponent(appName, () => createAppContainer(TabNavigator));
