import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import HomeProducts from './HomeProducts';
import Offer from './Offer';
import { ScrollView } from 'react-native-gesture-handler';
import HomeCategories from './HomeCategories';
import HomeHeader from './HomeHeader';
import Slider from './Slider';

const HomeScreen = () => {
    const clearStorageStarter = async () => {
        try {
            await AsyncStorage.removeItem('@viewedStarter');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView style={{ flex: 1, marginHorizontal: 6 }}>
                <Slider />
                {/* <Offer /> */}
                <HomeCategories />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#55575E' }}>Arrivages</Text>
                    <Text style={{ paddingRight: 3, color: 'gray', opacity: 0.7 }}>Voir plus</Text>
                </View>
                <HomeProducts />
                {/* <TouchableOpacity onPress={clearStorageStarter}>
                    <Text style={{color: 'green'}}>Clear async storage</Text>
                </TouchableOpacity> */}
                <ActivityIndicator size={'small'} color={'lightgray'} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;