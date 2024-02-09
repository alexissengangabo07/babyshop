import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const HomeCategories = () => {
    return (
        <View style={{ marginVertical: 13 }}>
            <View style={{ marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#55575E' }}>Catégories</Text>
            </View>
            {/* <FlatList data={[0, 1]} renderItem={data => <View><Text>Ok {data.index}</Text></View>} /> */}
            <View style={{ flexDirection: 'row', gap: 6 }}>
                <Text style={[styles.catText, { backgroundColor: 'orange', color: 'white' }]}>Toutes</Text>
                <Text style={styles.catText}>Categ 1</Text>
                <Text style={styles.catText}>Categ 2</Text>
                <Text style={styles.catText}>Categ 3</Text>
                <Text style={styles.catText}>Categ 4</Text>
                <Text style={styles.catText}>Categ 5</Text>
                <Text style={styles.catText}>Categ 6</Text>
                <Text style={styles.catText}>Categ 7</Text>
            </View>
        </View>

    )
}

export default HomeCategories

const styles = StyleSheet.create({
    catText: {
        backgroundColor: '#DFDFDF',
        // borderColor: 'orange',
        // borderWidth: 1,
        color: 'gray',
        borderRadius: 18,
        minWidth: 30,
        padding: 9
    }
})