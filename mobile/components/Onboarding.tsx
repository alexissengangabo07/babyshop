import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View, Animated } from "react-native";
import { slides } from "../sliders";
import OnboardItem from "./OnboardItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const slidesRef: any = useRef(null);

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({
                animated: true,
                index: currentIndex + 1
            });
            console.log(currentIndex + 1);
        }
        else {
            try {
                await AsyncStorage.setItem('@viewedStarter', 'true');
            } catch (error) {
                console.log('Error setitem : ', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pinchGestureEnabled
                    pagingEnabled
                    bounces={false}
                    initialScrollIndex={0}
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                    scrollEventThrottle={32}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
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
        color: '#',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})

export default Onboarding;