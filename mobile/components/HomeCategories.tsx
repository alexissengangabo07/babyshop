import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProductsStock } from "../features/stock.slice";
import { RootState } from '../redux/store';

const HomeCategories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((store: RootState) => store.stockReducer);

    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    return (
        <View style={{ marginVertical: 13 }}>
            <View style={{ marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#55575E' }}>Catégories</Text>
            </View>
            <ScrollView horizontal showsVerticalScrollIndicator={false}>
                <Text style={[styles.catText, {marginRight: 5, backgroundColor: '#fd3d57', color: 'white' }]}>Toutes</Text>
                <View style={{ flexDirection: 'row', gap: 6 }}>
                    { categories.data.map((category, i) => <Text style={styles.catText} key={i}>{category.productId?.category}</Text>)}
                </View>
            </ScrollView>
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