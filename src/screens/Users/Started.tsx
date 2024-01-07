import {
  StyleSheet, Text,
  ImageBackground,
  TouchableOpacity, View
} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '@themes/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '@themes/colors';
import { useTranslation } from 'react-i18next';

const Started = () => {
  const { t } = useTranslation()
  return (
    <ImageBackground
      source={require('@images/banner1.jpg')}
      style={styles.backgroundImage}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.backgroundGradient}
      ></LinearGradient>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text
            style={styles.title}
          >{t('Welcome to Animax')}</Text>
          <Text style={[styles.text, {fontWeight: 'normal'}]}
          >{t('The best streaming anime app of the century to entertain you every day.')}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.text}>{t('Get Started')}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Started

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: hp('8%'),
    paddingHorizontal: wp('5%')
  },
  content: {
    alignItems: 'center',
    marginBottom: hp('8%')
  },
  title: {
    fontSize: hp('4.1%'),
    color: '#FFFFFF',
    marginBottom: hp('2%'),
    fontFamily: fonts.MAIN,
    textAlign: 'center',
    fontWeight: '700'
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
  },
})