import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ForgotPasswordScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text>ForgotPassword</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});