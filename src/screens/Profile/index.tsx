import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '@hooks/redux'
import { setLogin } from '@redux/slice/userSlice'
import { AppDispatch } from '@redux/store/store'
import { TouchableOpacity } from 'react-native'
import Box from '@common/Box'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { navigate } from '@utils/navigationRef'
import Img from '@common/Img'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import Btn from '@common/Btn'
import { useTheme } from '@hooks/redux'
import Header from './Header'

const Profile = () => {
  const color = useTheme()
  const { t } = useTranslation()
  const dispatch: AppDispatch = useAppDispatch()
  return (
    <KeyBoardSafe>
      <Box
        paddingHorizontal={20}
        flex={1}
      >

        <Header t={t} title="Profile" />
        <Img
          source={require('@images/unAuth/user.png')}
          width={50}
          height={50}
          radius={50}
          marginTop={20}
        />
      </Box>

    </KeyBoardSafe>
  )
}

export default Profile

const styles = StyleSheet.create({})