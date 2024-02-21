import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Img from '@common/Img';

interface LazyLoadImgProps {
    source: any;
    width: number;
    height: number;
    radius?: number;
}

const LazyLoadImg: React.FC<LazyLoadImgProps> = ({ source, width, height, radius }) => {
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ opacity }}>
            <Img
                source={source}
                width={width}
                height={height}
                radius={radius}
            />
        </Animated.View>
    );
};

export default LazyLoadImg;