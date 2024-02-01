import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

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
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={clearStorageStarter}>
                <Text>Clear async storage</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;