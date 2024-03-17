import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgotPasswordScreen from '../screens/Authentication/ForgotPassword/ForgotPasswordScreen'
import LoginScreen from '../screens/Authentication/Login/LoginScreen'
// import SignUpScreen from '../screens/Authentication/SignUp/SignUpScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab'
import { COLORS, ROUTES } from '../constants'
import Register from '../screens/Authentication/Register/RegisterScreen'
import DrawerNavigation from './DrawerNavigation'

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: COLORS.white, headerStyle: { backgroundColor: COLORS.primary }, headerBackTitleVisible: false }} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigation} options={{headerShown: false}}/>
      {/* <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='TabNavigation' component={BottomTab} options={{headerShown: false}}/> */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})