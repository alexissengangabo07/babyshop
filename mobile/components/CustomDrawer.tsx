import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

let year = new Date().getFullYear();

const CustomDrawer = (props: any) => {
    return (
        <View style={styles.viewContainer}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#fff' }}>
                <ImageBackground source={require('../assets/images/nature.jpeg')} style={styles.ImageBackground}>
                    <Image source={require('../assets/images/Alex.jpg')} style={styles.smallImage} />
                    <Text style={[styles.username, styles.text]}>Alexis Senga Ngabo</Text>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Text style={styles.text}>2 Commandes effectuées</Text>
                    </View>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.bottomView}>
                <TouchableOpacity style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='share' color={'rebeccapurple'} size={20} />
                        <Text style={{ fontSize: 15, marginLeft: 30, color: 'rebeccapurple' }}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="logout" color={'rebeccapurple'} size={20} />
                        <Text style={{ fontSize: 15, marginLeft: 30, color: 'rebeccapurple' }}>Logout</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.textGray}>&copy; Bambino {year}</Text>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    ImageBackground: {
        paddingBottom: 20,
        paddingTop: 50,
        paddingHorizontal: 10,
        marginTop: -60
    },
    smallImage: {
        borderRadius: 50,
        width: 80,
        height: 80,
    },
    text: {
        color: '#fff',
        paddingRight: 5
    },
    username: {
        fontSize: 18,
        fontWeight: '500'
    },
    bottomView: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    textGray: {
        color: '#ccc'
    }
})