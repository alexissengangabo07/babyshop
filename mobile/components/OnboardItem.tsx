import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";

type ItemsType = {
    id: number;
    title: string;
    description: string;
    image: number;
}

const OnboardItem: React.FC<{ item: ItemsType }> = ({ item }) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width, height: 600, backgroundColor: 'green' }]}>
            <Text>Onpoarditempv</Text>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 10,
        color: 'white',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})

export default OnboardItem;