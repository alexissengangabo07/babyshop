import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

const SearchHeader = () => {
    return (
        <View style={styles.homeHeader}>
            <View style={styles.one}>
                <View style={{borderWidth: 1, borderRadius: 100, padding: 7, borderColor: 'gray'}}>
                    <Feather name='menu' size={22} />
                </View>
                {/* <Image style={styles.imageOnTop} source={require('../assets/images/1.png')} /> */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'orange', fontSize: 20 }}>BAMBINO </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>SHOP</Text>
                </View>
                <View style={{ position: 'relative', backgroundColor: 'transparent', padding: 5, borderRadius: 30 }}>
                    <AntDesign name="shoppingcart" size={28} color="black" />
                    <View style={{ position: 'absolute', top: -5, right: -2, borderRadius: 100, backgroundColor: 'white', width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.two}>
                <View style={styles.searchSection}>
                    <FontAwesome style={styles.searchIcon} name="search" size={20} color="#000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Recherchexxr..."
                        underlineColorAndroid="transparent"
                        autoFocus={true}
                    />
                </View>
            </View>
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

export default SearchHeader;