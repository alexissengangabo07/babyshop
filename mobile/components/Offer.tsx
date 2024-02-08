import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Offer = () => {
    return (
        <View style={{marginTop: 10}}>
            <Image source={require('../assets/images/50off.jpg')} style={styles.img} />
        </View>
    )
}

export default Offer

const styles = StyleSheet.create({
    img: {
        width: 'auto',
        height: 200,
        objectFit: 'cover'
    }
})