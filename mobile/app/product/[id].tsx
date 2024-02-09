import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = () => {
    return (
        <View>
            <Image source={require('../../assets/images/1.png')} />
            <View>
                <Text>Telephone aa</Text>
                <Text>$99.86</Text>
                <View>
                    <Text>Description</Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore suscipit maxime aperiam possimus sequi ex sapiente. Vitae sint aut unde, officiis eveniet obcaecati mollitia atque, doloribus beatae dolor a?
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({})