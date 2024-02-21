import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Drawer } from 'expo-router/drawer'
import CustomDrawer from '../../components/CustomDrawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const DrawerLayout = () => {
    return (
        <Drawer
            screenOptions={{
                drawerActiveBackgroundColor: 'orange',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: '500'
                }
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='(tabs)'
                options={{
                    headerShown: false,
                    title: 'Accueil',
                    drawerIcon: ({ color }) => < Ionicons name="home-outline" size={23} color={color} />
                }}
            />
            <Drawer.Screen name='orderHistory/index'
                options={{
                    headerShown: true,
                    title: 'Commandes',
                    headerTitle: 'Historique des commandes',
                    drawerIcon: ({ color }) => <MaterialIcons name="history" size={23} color={color} />
                }}
            />
            <Drawer.Screen name='settings/index'
                options={{
                    headerShown: true,
                    title: 'Paramètres',
                    drawerIcon: ({ color }) => <Ionicons name="cog" size={23} color={color} />
                }}
            />
        </Drawer >
    )
}

export default DrawerLayout

const styles = StyleSheet.create({})