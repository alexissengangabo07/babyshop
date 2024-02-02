import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

const Apropos = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Apropos</Text>
      </View>
    </SafeAreaView>
  )
}

export default Apropos

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})