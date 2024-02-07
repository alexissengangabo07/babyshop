import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import HomeProducts from './HomeProducts';

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
            <View style={styles.homeHeader}>
                <View style={styles.one}>
                    <Image style={styles.imageOnTop} source={require('../assets/images/1.png')} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'orange', fontSize: 20 }}>BAMBINO </Text>
                        <Text style={{ color: 'white', fontSize: 20 }}>SHOP</Text>
                    </View>
                    <View style={{ backgroundColor: 'lightgray', padding: 5, borderRadius: 30 }}>
                        <Feather name="bell" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.two}>
                    <View style={styles.searchSection}>
                        <FontAwesome style={styles.searchIcon} name="search" size={20} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder="Recherchexxr..."
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'lightgray', borderRadius: 4, paddingVertical: 8, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <HomeProducts />
            <TouchableOpacity onPress={clearStorageStarter}>
                <Text>Clear async storage</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        backgroundColor: '#fd3d57',
        paddingHorizontal: 8,
        paddingVertical: 9
    },
    one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    two: {
        marginTop: 22,
        flexDirection: 'row',
        gap: 10
    },
    container: {
        flex: 1
    },
    imageOnTop: {
        width: 35,
        height: 35,
        borderRadius: 150
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export default HomeScreen;