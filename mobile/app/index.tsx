import { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, ActivityIndicator } from 'react-native';
import Onboarding from '../components/Onboarding';
import HomeScreen from '../components/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loader = () => (
  <View>
    <ActivityIndicator size={'large'} />
  </View>
)

const index = () => {
  const [loading, setLoading] = useState(true);
  const [starterVisibility, setStarterVisibility] = useState(false);

  const checkStarter = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedStarter');

      if (value !== null) {
        setStarterVisibility(true);
      }
    } catch (error) {
      console.error('Error starter: ', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkStarter();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        {loading ? <Loader /> : starterVisibility ? <HomeScreen /> : <Onboarding />}
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default index;