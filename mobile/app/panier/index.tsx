import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PanierItem from '../../components/PanierItem'
import PanierTotal from '../../components/PanierTotal'

const Panier = () => {
    return (
        <View style={styles.container}>
            <PanierItem />
            <PanierTotal />
        </View>
    )
}

export default Panier

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
        justifyContent: 'space-between',
        height: '100%'
    }
})