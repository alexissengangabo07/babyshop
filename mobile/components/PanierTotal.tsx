import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PanierTotal = () => {
    return (
        <View style={styles.container}>
            <View style={styles.totalItem}>
                <Text style={{fontWeight: '500', fontSize: 16}}>SubTotal : </Text>
                <Text style={{fontWeight: '500', fontSize: 16}}>$299.34</Text>
            </View>
            <View style={[styles.totalItem, { marginTop: 10,marginBottom: 10, borderBottomColor: 'lightgray', paddingBottom: 5, borderBottomWidth: 1 }]}>
                <Text style={{fontWeight: '500', fontSize: 16}}>Total : </Text>
                <Text style={{fontWeight: '500', fontSize: 16}}>$299.34</Text>
            </View>
            <TouchableOpacity style={styles.checkout}>
                <Text style={{ color: '#fff', fontSize: 18 }}>Passer la commande</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PanierTotal

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: '#c5c5c57d',
        paddingHorizontal: 9,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20
    },
    checkout: {
        backgroundColor: 'orange',
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    totalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    }
})