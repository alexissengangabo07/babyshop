import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Svg, { G, Circle} from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

const NextButton = ({ percentage, scrollTo }: { percentage: number, scrollTo: () => void }) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef: any = useRef(null);

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                const strokeDashoffset = circumference - (circumference * value.value) / 100;
                if (progressRef?.current) {
                    progressRef.current.setNativeProps({
                        strokeDashoffset
                    });
                }
            },
            [percentage]
        );

        return () => {
            progressAnimation.removeAllListeners();
        }
    })


    return (
        <View style={styles.container}>
            {/* <Svg height={size} width={size}>
            <G rotation='-90' origin={center}>
                <Circle stroke='red' cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} 
                />
                 <Circle ref={progressRef} stroke='orange' cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} 
                strokeDashoffset={circumference - (circumference * 25) / 100} />
                </G>
            </Svg> */}
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={scrollTo}>
                <AntDesign name='arrowright' size={30} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

export default NextButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'orange',
        position: 'absolute',
        borderRadius: 100,
        padding: 20
    }
})