import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchProductsStock } from '@/features/stock.slice'; // Assuming this import is correctly configured
// import { RootState } from '@/redux/store';

const Slider = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((store: RootState) => store.stockReducer);
  const [currentItem, setCurrentItem] = useState(0);

//   useEffect(() => {
    // dispatch(fetchProductsStock());
//   }, []);

  useEffect(() => {
    const slide = setInterval(() => {
      if (currentItem < 3) {
        setCurrentItem(currentItem + 1);
      } else {
        setCurrentItem(0);
      }
    }, 5000);

    return () => clearInterval(slide);
  }, [currentItem]);

  const handleDotClick = (index: number) => {
    setCurrentItem(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: `${100 * 3}%` }}>
        {[0,0,0,0].map((product, i) => (
          <View key={i} style={styles.slide}>
            <Image source={require('../assets/images/50off.jpg')} style={styles.image} />
            {/* <View>
              <Text style={styles.title}>{"product.productId?.name"}</Text>
              <TouchableOpacity onPress={() => console.log('Navigate to product detail')}>
                <Text style={styles.button}>Achetez maintenant</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {[0,0,0,0].map((_, i) => (
          <TouchableOpacity key={i} onPress={() => handleDotClick(i)}>
            <Text style={[styles.dot, currentItem === i && styles.activeDot]}>•</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '15%', // Convert to React Native style (you may need to adjust)
    overflow: 'hidden',
  },
  slide: {
    width: '100%',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    objectFit: 'cover'
  },
  // overlay: {
  //   ...StyleSheet.absoluteFillObject,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  // },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  button: {
    marginTop: 10,
    color: 'white',
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: '40%',
    transform: [{ translateX: -5 }],
  },
  dot: {
    fontSize: 30,
    color: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    color: 'blue', // Change to your active dot color
  },
});

export default Slider;