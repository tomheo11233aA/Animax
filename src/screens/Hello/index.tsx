import React, { useEffect } from 'react'
import { localStorage } from '@utils/localStorage'
import Box from '@common/Box'
import Icon from '@common/Icon'
import { keys } from '@contants/keys'
import { screens } from '@contants/screens'
import { useAppDispatch } from '@hooks/redux'
import { useNavigation } from '@react-navigation/native'
import { setLanguage } from '@redux/slice/userSlice'
import { colors } from '@themes/colors'
import { convertLanguage } from '@utils/convert'
import { width } from '@utils/responsive'
import { useTranslation } from 'react-i18next'
import { setTheme } from '@redux/slice/userSlice'
import LottieView from 'lottie-react-native'

const Hello = () => {
  const dispatch = useAppDispatch()
  const { i18n } = useTranslation()
  const navigation = useNavigation<any>()

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      const lng = localStorage.getString(keys.LANGUAGE) || 'en'
      i18n.changeLanguage(lng)
      const lngObj = convertLanguage(lng)
      dispatch(setLanguage(lngObj))
      const theme = (localStorage.getString(keys.THEME) || 'light') as 'dark' | 'light';
      dispatch(setTheme(theme));
      // navigation.replace(screens.SIGNUP)
      navigation.replace(screens.MAIN)
    }, 2000)
    return () => clearTimeout(timeOut)
  }, [])


  return (
    <Box
      flex={1}
      alignCenter
      justifyCenter
      backgroundColor={'#11181e'}
    >
      <Icon
        resizeMode={'contain'}
        source={require('@images/logo.png')}
        size={width * 30 / 60}
        tintColor={colors.white}
      />
      <LottieView
        source={require('@lotties/loading.json')}
        autoPlay
        loop
        style={{
          width: width * 40 / 100,
          height: width * 40 / 100,
        }}
      />
    </Box>
  )
}

export default Hello
