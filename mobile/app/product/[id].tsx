import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from '../../redux/store';
import { fetchProduct } from "../../features/stock.slice";
import { useLocalSearchParams } from 'expo-router';

const Product = () => {
    const dispatch = useAppDispatch();
    const { singleProd } = useAppSelector((store: RootState) => store.stockReducer);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        dispatch(fetchProduct(id.toString()));
        console.log(singleProd.productId?.image.url)
    }, []);

    return (
        <View style={{ position: 'relative', height: '100%' }}>
            <View style={{ position: 'relative' }}>
                <Image source={{ uri: singleProd.productId?.image.url }} style={styles.img} />
                <TouchableOpacity style={{ backgroundColor: '#c5c5c57d', position: 'absolute', top: 5, right: 5, borderRadius: 150, padding: 10 }}>
                    <FontAwesome name="share-alt" color={'#858585'} size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 8, paddingHorizontal: 9 }}>
                <Text style={styles.prodTitle} >{singleProd.productId?.name}</Text>
                <Text style={styles.price}>{singleProd.productId?.devise === 'USD' ? '$' : 'FC '}{singleProd.productId?.price}</Text>
                <View style={{ marginTop: 25 }}>
                    <Text style={{ color: 'lightgray', borderRadius: 5, backgroundColor: '#2b5a6e', width: 90, padding: 6 }}>Description</Text>
                    <Text style={{ color: 'gray', marginTop: 5 }}>
                        {singleProd.productId?.description}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'space-between', backgroundColor: '#c5c5c57d', paddingVertical: 15, paddingHorizontal: 8, borderTopEndRadius: 10, borderTopLeftRadius: 10 }}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'transparent', borderColor: '#2b5a6e', borderWidth: 1, padding: 13, borderRadius: 6 }}>
                        <FontAwesome name='minus' color={'#2b5a6e'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24 }}>0</Text>
                    <TouchableOpacity style={{ backgroundColor: '#2b5a6e', padding: 13, borderRadius: 6, borderColor: '#2b5a6e', borderWidth: 1 }}>
                        <FontAwesome name='plus' color={'lightgray'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'orange', padding: 11, borderRadius: 8 }}>
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
        height: 260
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