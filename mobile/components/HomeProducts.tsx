import React, { useEffect } from 'react';
import { View, Text, Linking, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from '../redux/store';
import { fetchProductsStock } from '../features/stock.slice';
import { FontAwesome } from '@expo/vector-icons';
// import { toast } from 'react-toastify'; // Make sure to import toast if needed

const HomeProducts = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store: RootState) => store.stockReducer);

    useEffect(() => {
        dispatch(fetchProductsStock());
        console.log(products.data)
    }, []);


    return (
        <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10, justifyContent: 'space-between' }}>
                {/* {products.data.map((product: any, i) => (
                    <View style={styles.priceContainer} key={i}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: product.productId.image?.url }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <View style={styles.overlay}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('/produit/' + product._id);
                                    }}
                                    style={styles.iconButton}
                                >
                                    <FontAwesome name='eye' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        // addToCard({
                                        //     produit: product.productId.name,
                                        //     id: product._id,
                                        //     image: product.productId.image.url,
                                        //     qteDispo: product.quantity,
                                        //     devise: product.productId.devise,
                                        //     description: product.productId.description,
                                        //     prix: product.productId.price,
                                        // });
                                    }}
                                    style={styles.iconButton}
                                >
                                    <FontAwesome name='cart-plus' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity onPress={() => Linking.openURL('/produit/' + product._id)}>
                                <Text style={styles.productName}>{product.productId.name}</Text>
                            </TouchableOpacity>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>
                                    {product.productId.devise === 'USD' ? '$' : 'FC '} {product.productId.price}
                                </Text>
                                <Text style={styles.oldPrice}>
                                    {product.productId.devise === 'USD' ? '$' : 'FC '} {product.productId.price + 10}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    // addToCard({
                                    //     produit: product.productId.name,
                                    //     id: product._id,
                                    //     image: product.productId.image.url,
                                    //     qteDispo: product.quantity,
                                    //     devise: product.productId.devise,
                                    //     description: product.productId.description,
                                    //     prix: product.productId.price,
                                    // });
                                }}
                                style={styles.addButton}
                            >
                                <Text style={styles.addButtonText}>Ajouter au panier</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))} */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product: any, i) => (
                    <View style={styles.productContainer} key={i}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/prod2.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <View style={styles.overlay}>
                                {/* <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL('/produit/' + 1);
                                    }}
                                    style={styles.iconButton}
                                >
                                    <FontAwesome name='eye' color={'green'} size={20} />
                                </TouchableOpacity> */}
                                <TouchableOpacity
                                    onPress={() => {
                                        // addToCard({
                                        //     produit: product.productId.name,
                                        //     id: product._id,
                                        //     image: product.productId.image.url,
                                        //     qteDispo: product.quantity,
                                        //     devise: product.productId.devise,
                                        //     description: product.productId.description,
                                        //     prix: product.productId.price,
                                        // });
                                    }}
                                    style={styles.iconButton}
                                >
                                    <FontAwesome name='cart-plus' size={22} color={'orange'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity onPress={() => Linking.openURL('/produit/' + 1)}>
                                <Text style={styles.productName}>Telephone aa</Text>
                            </TouchableOpacity>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>
                                    USD 10
                                </Text>
                                <Text style={styles.oldPrice}>
                                    USD 20
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        flexBasis: '49%',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        objectFit: 'cover'
    },
    overlay: {
        position: 'absolute',
        top: 2,
        // left: 0,
        right: 2,
        // bottom: 0,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        opacity: 1,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F6FB', 
        borderRadius: 20,
        marginHorizontal: 5,
    },
    textContainer: {
        padding: 10,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#1c4e64'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#70758E', 
        backgroundColor: 'lightblue',
        borderRadius: 8,
        paddingVertical: 2,
        paddingHorizontal: 8
    },
    oldPrice: {
        fontSize: 12,
        color: 'gray', // Change color as needed
        textDecorationLine: 'line-through',
        marginLeft: 5,
    },
    // addButton: {
    //     backgroundColor: 'blue', // Change color as needed
    //     paddingVertical: 10,
    //     borderRadius: 5,
    // },
    // addButtonText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    // },
});

export default HomeProducts;