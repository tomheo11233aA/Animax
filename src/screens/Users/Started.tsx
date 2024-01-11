import React from 'react';
import {
  StyleSheet, Text, ImageBackground,
  TouchableOpacity, View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSharedValue, interpolateColor } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';

const images = [
  { id: 1, image: require('@images/background.png') },
  { id: 2, image: require('@images/background2.png') },
  { id: 3, image: require('@images/background3.png') }
];

const Started = () => {
  const { t } = useTranslation()
  const progressValue = useSharedValue<number>(0);
  return (
    <>
      <Carousel
        data={images}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            style={styles.backgroundImage}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
              style={styles.backgroundGradient}
            />

          </ImageBackground>
        )}
        width={wp('100%')}
        height={hp('100%')}
        autoPlay
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
      />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text
            style={styles.title}
          >{t('Welcome to Animax')}</Text>
          <Text style={[styles.text, { fontWeight: 'normal' }]}
          >{t('The best streaming anime app of the century to entertain you every day.')}</Text>
        </View>
        <View style={styles.paginationContainer}>
          {images.map((_, index) => (
            <PaginationItem
              backgroundColor={'#06C149'}
              animValue={progressValue}
              index={index}
              key={index}
              length={images.length}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate(screens.SIGNINSOCIAL)}
        >
          <Text style={styles.text}>{t('Get Started')}</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

const PaginationItem: React.FC<{
  index: number
  backgroundColor: string
  length: number
  animValue: Animated.SharedValue<number>
  isRotate?: boolean
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 10;
  const selectedWidth = 32;
  const widthStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [width, selectedWidth, width];
    const interpolatedWidth = interpolate(
      animValue.value,
      inputRange,
      outputRange,
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      animValue.value,
      inputRange,
      [0.2, 1, 0.2],
      Extrapolation.CLAMP
    );

    const myBackground = interpolateColor(
      animValue.value,
      inputRange,
      ["white", backgroundColor, "white"]
    );

    return {
      width: interpolatedWidth,
      opacity: opacity,
      backgroundColor: myBackground,
    };
  }, [animValue, index]);



  return (
    <Animated.View
      style={[
        {
          width: width,
          height: width,
          borderRadius: 50,
          marginHorizontal: 5,
          overflow: "hidden",
          transform: [
            {
              rotateZ: isRotate ? "90deg" : "0deg",
            },
          ],
        },
        widthStyle
      ]}
    >
      <View
        style={{
          borderRadius: 50,
          flex: 1,
        }}
      />
    </Animated.View>
  );
};

export default Started

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  backgroundGradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  content: {
    alignItems: 'center',
    position: 'absolute',
    height: hp('30%'),
  },
  title: {
    fontSize: hp('4.1%'),
    color: '#FFFFFF',
    marginBottom: hp('2%'),
    fontFamily: fonts.MAIN,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    fontSize: hp('2.1%'),
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: fonts.MAIN,
  },
  button: {
    width: '90%',
    height: hp('7%'),
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('3.5%'),
    marginBottom: hp('5%'),
  },
})