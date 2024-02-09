import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import UserLogin from '../../../../components/UserLogin';

const User = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <UserLogin />
    </SafeAreaView>
  )
}

export default User;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginTop: 15,
    marginHorizontal: 8
  }
})