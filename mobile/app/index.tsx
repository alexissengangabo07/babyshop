import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Onboarding from '../components/Onboarding';

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'green'} barStyle={'light-content'} />
        <Onboarding />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'red', // You can set your desired background color
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default index;