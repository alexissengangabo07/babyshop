import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PanierTotal = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>SubTotal : </Text>
                <Text>$299.34</Text>
            </View>
            <View>
                <Text>Total : </Text>
                <Text>$299.34</Text>
            </View>
            <TouchableOpacity>
                <Text>Chechout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PanierTotal

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    }
})