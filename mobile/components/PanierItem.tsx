import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PanierItem = () => {
    return (
        <ScrollView style={{ marginHorizontal: 5 }}>
            {
                [0, 1, 2, 3, 4,0,0,0,0,0,0,0,0].map((item, i) => (
                    <View key={i} style={styles.itemContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/images/1.png')} style={styles.itemImage} />
                            <View style={{ flexBasis: '73%', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={styles.itemTitle}>Shoes 950</Text>
                                        <Text style={{ color: 'green', marginBottom: 12, fontSize: 11 }}>En Stock</Text>
                                    </View>
                                    <TouchableOpacity style={{ backgroundColor: 'pink', padding: 8, width: 33, borderRadius: 4 }}>
                                        <FontAwesome name="trash-o" size={18} color={'red'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.itemPrice}>$88.89</Text>
                                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                        <TouchableOpacity style={{ backgroundColor: 'transparent', borderColor: '#2b5a6e', borderWidth: 1, padding: 6, borderRadius: 6 }}>
                                            <FontAwesome name='minus' color={'#2b5a6e'} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 20 }}>0</Text>
                                        <TouchableOpacity style={{ backgroundColor: '#2b5a6e', padding: 6, borderRadius: 6, borderColor: '#2b5a6e', borderWidth: 1 }}>
                                            <FontAwesome name='plus' color={'lightgray'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    )
}

export default PanierItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        width: '100%',
        // justifyContent: 'space-between'
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '500'
    },
    itemPrice: {
        color: 'gray',
        fontSize: 16,
    }
});