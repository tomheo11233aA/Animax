import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Box from '@common/Box'
import SkeletonBox from '@themes/Skeleton/SkeletonBox';

const { width, height } = Dimensions.get('window');
const HomeLoading = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, [animation]);

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.2, 1],
    });

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={{ opacity }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                    style={{
                        position: 'absolute',
                        height: height,
                        width: width,
                    }}
                />
                <Box style={styles.bannerSkeleton} />
                <SkeletonBox />
                <SkeletonBox />
            </Animated.View>
        </View>

    );
};
const styles = StyleSheet.create({
    bannerSkeleton: {
        width: width,
        height: height * 0.45,
        backgroundColor: '#e1e1e1',
        marginBottom: 20,
    },
})
export default HomeLoading;