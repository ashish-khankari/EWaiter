import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../constants';

import Wallet from '../screens/Wallet';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Dashboard/Home/HomeScreen';
import Orders from '../screens/Dashboard/Orders/OrderScreen.js';
import Scanner from '../screens/Dashboard/Scanner/Scanner';
import CartScreen from '../screens/Cart/CartScreen';
import ProfileSCreen from '../screens/ProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/Dashboard/Home/HomeScreen';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        if (route.name == ROUTES.HOME_TAB) {
          iconName = focused ? 'ios-home-sharp' : 'ios-home-outline'
        } else if (route.name === ROUTES.SETTINGS) {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === ROUTES.WALLET) {
          iconName = focused ? 'wallet' : 'wallet-outline'
        } else if (route.name === ROUTES.NOTIFICATIONS) {
          iconName = focused ? 'md-notifications-sharp' : 'md-notifications-outline'
        }

        if (!iconName) {
          iconName = 'alert-circle'; // Placeholder icon if route name doesn't match
        }
        return <Icon name={iconName} size={22} color={color} />
      }
    })}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        name={ROUTES.ORDER}
        component={Orders}
      />

      <Tab.Screen
        name={ROUTES.SCANNER}
        component={Scanner}
      />
      <Tab.Screen
        name={ROUTES.CART}
        component={CartScreen}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})