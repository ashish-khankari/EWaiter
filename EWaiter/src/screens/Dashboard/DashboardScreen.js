import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
        <Text>
        MOve
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})