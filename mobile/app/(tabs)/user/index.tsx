import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>User screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default User;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})