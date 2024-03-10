import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { ROUTES } from '../constants';
import Home from '../screens/Dashboard/DashboardScreen';
import Wallet from '../screens/Wallet';
import Notifications from '../screens/Notifications';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name={ROUTES.HOME_TAB} component={BottomTab}/>
        <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet}/>
        <Drawer.Screen name={ROUTES.NOTIFICATIONS} component={Notifications}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})