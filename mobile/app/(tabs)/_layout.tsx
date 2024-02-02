import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const TabRootLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ headerShown: false, title: 'Accueil', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <AntDesign name='home' size={22} /> }} />
            <Tabs.Screen name='shop/index' options={{ headerShown: false, title: 'Produits', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <FontAwesome name='shopping-bag' size={22} /> }} />
            <Tabs.Screen name='contact/index' options={{ headerShown: false, title: 'Contact', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <FontAwesome name='envelope' size={22} /> }} />
            <Tabs.Screen name='apropos/index' options={{ headerShown: false, title: 'A Propos', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <AntDesign name='exclamationcircle' size={22} /> }} />
        </Tabs>
    )
}

export default TabRootLayout;