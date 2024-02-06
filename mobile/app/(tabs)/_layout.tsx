import React, { useEffect } from 'react';
import { Tabs, router, usePathname } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const TabRootLayout = () => {
    const path = usePathname();

    return (
        <Tabs screenOptions={{ tabBarStyle: { borderTopRightRadius: 30, borderTopLeftRadius: 30 } }}>
            <Tabs.Screen name='index'
                options={{ headerShown: false, title: 'Accueil', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <FontAwesome color={path === '/' ? '#fd3d57' : '#808080ba'} name='home' size={28} /> }}
            />
            <Tabs.Screen name='shop/index'
                options={{ headerShown: false, title: 'Produits', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <FontAwesome color={path === '/shop' ? '#fd3d57' : '#808080ba'} name='shopping-bag' size={22} /> }}
            />
            <Tabs.Screen name='contact/index'
                options={{ headerShown: false, title: 'Contact', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <FontAwesome color={path === '/contact' ? '#fd3d57' : '#808080ba'} name='envelope' size={22} /> }}
            />
            <Tabs.Screen name='apropos/index'
                options={{ headerShown: false, title: 'A Propos', tabBarActiveTintColor: 'darkorange', tabBarIcon: () => <AntDesign color={path === '/apropos' ? '#fd3d57' : '#808080ba'} name='exclamationcircle' size={22} /> }}
            />
        </Tabs>
    )
}

export default TabRootLayout;