import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Product = () => {
    return (
        <View style={{ position: 'relative', height: '100%' }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../assets/images/1.png')} style={styles.img} />
                <TouchableOpacity style={{ backgroundColor: '#c5c5c57d', position: 'absolute', top: 5, right: 5, borderRadius: 150, padding: 10 }}>
                    <FontAwesome name="share-alt" color={'#858585'} size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 8, paddingHorizontal: 9 }}>
                <Text style={styles.prodTitle} >Telephone aa</Text>
                <Text style={styles.price}>$99.86</Text>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: 'lightgray', borderRadius: 5, backgroundColor: '#2b5a6e', width: 90, padding: 6 }}>Description</Text>
                    <Text style={{ color: 'gray', marginTop: 5 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore suscipit maxime aperiam possimus sequi ex sapiente. Vitae sint aut unde, officiis eveniet obcaecati mollitia atque, doloribus beatae dolor a?
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'space-between', backgroundColor: '#c5c5c57d', paddingVertical: 15, paddingHorizontal: 8 }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'transparent', borderColor: '#2b5a6e', borderWidth: 1, padding: 13, borderRadius: 6 }}>
                        <FontAwesome name='minus' color={'#2b5a6e'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24 }}>2</Text>
                    <TouchableOpacity style={{ backgroundColor: '#2b5a6e', padding: 13, borderRadius: 6, borderColor: '#2b5a6e', borderWidth: 1 }}>
                        <FontAwesome name='plus' color={'lightgray'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 6 }}>
                    <Text style={{ color: 'white' }}>Ajouter au pamier</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    img: {
        width: '100%',
    },
    prodTitle: {
        fontWeight: '500',
        fontSize: 22
    },
    price: {
        fontWeight: '500',
        fontSize: 18,
        color: 'orange'
    }
})