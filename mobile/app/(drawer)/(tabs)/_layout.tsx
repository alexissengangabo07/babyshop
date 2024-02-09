import React, { useEffect } from 'react';
import { Tabs, router, usePathname } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const TabRootLayout = () => {
    const path = usePathname();

    return (
        <Tabs screenOptions={{ tabBarStyle: { borderTopRightRadius: 30, borderTopLeftRadius: 30 } }}>
            <Tabs.Screen name='index'
                options={{ headerShown: false, title: 'Accueil', tabBarActiveTintColor: 'orange', tabBarIcon: () => <FontAwesome color={path === '/' ? 'orange' : '#808080ba'} name='home' size={28} /> }}
            />
            <Tabs.Screen name='search/index'
                options={{ headerShown: false, title: 'Search', tabBarActiveTintColor: 'orange', tabBarIcon: () => <AntDesign color={path === '/search' ? 'orange' : '#808080ba'} name='search1' size={22} /> }}
            />
            <Tabs.Screen name='shop/index'
                options={{ headerShown: false, title: 'Produits', tabBarActiveTintColor: 'orange', tabBarIcon: () => <FontAwesome color={path === '/shop' ? 'orange' : '#808080ba'} name='shopping-bag' size={22} /> }}
            />
            <Tabs.Screen name='user/index'
                options={{ headerShown: false, title: 'User', tabBarActiveTintColor: 'orange', tabBarIcon: () => <FontAwesome color={path === '/user' ? 'orange' : '#808080ba'} name='user-o' size={22} /> }}
            />
        </Tabs>
    )
}

export default TabRootLayout;