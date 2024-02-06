import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

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
                    <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 30 }}>
                        <FontAwesome name='bell' size={16} />
                    </View>
                </View>
                <View style={styles.two}>
                    <View style={{ position: 'relative' }}>
                        <FontAwesome color='green' name="search" style={{ position: 'absolute' }} />
                        <TextInput style={styles.searchInput} placeholder="Rechercher ..." />
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: 'white' }}>
                            <FontAwesome name="phone" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    container: {
        flex: 1
    },
    imageOnTop: {
        width: 35,
        height: 35,
        borderRadius: 150
    }
});

export default HomeScreen;