import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Img from '@common/Img';
import { ImageResizeMode, ImageSourcePropType } from 'react-native';

interface LazyLoadImgProps {
    source: ImageSourcePropType;
    width: number;
    height: number;
    radius?: number;
    resizeMode?: ImageResizeMode;
}

const LazyLoadImg: React.FC<LazyLoadImgProps> = ({ source, width, height, radius, resizeMode }) => {
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
                resizeMode={resizeMode}
            />
        </Animated.View>
    );
};

export default LazyLoadImg;