import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '@hooks/redux'
import { setLanguage } from '@redux/slice/userSlice'
import { useTranslation } from 'react-i18next'
import { convertLanguage } from '@utils/convert'

const Download = () => {
  const dispatch = useAppDispatch()
  const { i18n, t } = useTranslation()

  const handleChangeLanguage = async (lng: string) => {
    i18n.changeLanguage(lng)
    const lngObj = convertLanguage(lng)
    dispatch(setLanguage(lngObj))
  }
  return (
    <View>
      <Text>{t('Download')}</Text>
      <TouchableOpacity
        onPress={() =>
          handleChangeLanguage('vn')
        }
        style={{ marginTop: 200, backgroundColor: 'red', padding: 10 }}
      >
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Download