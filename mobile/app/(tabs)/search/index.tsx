import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import SearchHeader from '../../../components/SearchHeader'
import HomeProducts from '../../../components/HomeProducts'

const Search = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchHeader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default Search;