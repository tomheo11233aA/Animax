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
    backgroundColor={colors.white}
  >
    <Icon
      resizeMode={'contain'}
      source={require('@images/logo.png')}
      size={width * 40 / 100}
    />
  </Box>
  )
}

export default Hello
