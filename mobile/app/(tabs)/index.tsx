import { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, ActivityIndicator } from 'react-native';
import HomeScreen from '../../components/HomeScreen';

const Loader = () => (
  <View style={{position: 'absolute', top: '55%', left: '44%'}}>
    <ActivityIndicator size={'large'} />
  </View>
)

const index = () => {
  const [loading, setLoading] = useState(true);
  const [starterVisibility, setStarterVisibility] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      {loading ? <Loader /> : <HomeScreen />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default index;