import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
    return (
        <Drawer>
            <Drawer.Screen name='(tabs)' options={{ headerShown: false, title: 'Accueil' }} />
            <Drawer.Screen name='orderHistory/index' options={{ headerShown: true, title: 'Historique des commandes' }} />
            <Drawer.Screen name='settings/index' options={{ headerShown: true, title: 'Paramètres' }} />
        </Drawer>
    )
}

export default DrawerLayout

const styles = StyleSheet.create({})