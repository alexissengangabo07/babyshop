import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const HomeHeader = () => {
    return (
        <View style={styles.homeHeader}>
            <View style={styles.one}>
                <TouchableOpacity style={{ borderWidth: 0, borderRadius: 0, padding: 0, borderColor: '#1c4e64' }}>
                    <Feather name='menu' size={29} color={'#1c4e64'} />
                </TouchableOpacity>
                {/* <Image style={styles.imageOnTop} source={require('../assets/images/1.png')} /> */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'orange', fontSize: 20, fontWeight: 'bold' }}>BAMBINO</Text>
                    <Text style={{ color: '#1c4e64', fontSize: 20, fontWeight: 'bold' }}>SHOP</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/panier/')} style={{ position: 'relative', backgroundColor: 'transparent', padding: 5, borderRadius: 30 }}>
                    <AntDesign name="shoppingcart" size={28} color="#1c4e64" />
                    <View style={{ position: 'absolute', top: -5, right: -2, borderRadius: 100, backgroundColor: 'red', width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>1</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.two}>
                <View style={styles.searchSection}>
                    <FontAwesome style={styles.searchIcon} name="search" size={20} color="#000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Recherchexxr..."
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        // backgroundColor: '#fd3d57',
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

export default HomeHeader;