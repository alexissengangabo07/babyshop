import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import HomeProducts from '../../../components/HomeProducts'
import HomeCategories from '../../../components/HomeCategories'
import Offer from '../../../components/Offer'
import { ScrollView } from 'react-native-gesture-handler'
import HomeHeader from '../../../components/HomeHeader'

const Shop = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeHeader />
      <ScrollView style={{ flex: 1, marginHorizontal: 6 }}>
        <HomeCategories />
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#55575E' }}>Arrivages</Text>
          <Text style={{ paddingRight: 3, color: 'gray', opacity: 0.7 }}>Voir plus</Text>
        </View> */}
        <HomeProducts />
        {/* <TouchableOpacity onPress={clearStorageStarter}>
                    <Text style={{color: 'green'}}>Clear async storage</Text>
                </TouchableOpacity> */}
        <ActivityIndicator size={'small'} color={'lightgray'} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default Shop;