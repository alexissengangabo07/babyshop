import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PanierItem = () => {
    return (
        <View>
            <Image source={require('../assets/images/1.png')} />
            <View>
                <Text>Shoes 950</Text>
                <FontAwesome name="dot-circle-o" size={20} color={'orange'} />
                <Text>$88.89</Text>
            </View>
            <View>
                <TouchableOpacity style={{ backgroundColor: 'hotpink', padding: 4, borderRadius: 4 }}>
                    <FontAwesome name="trash-o" size={20} color={'red'} />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity>
                        <FontAwesome name='minus' />
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity >
                        <FontAwesome name='plus' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PanierItem

const styles = StyleSheet.create({})