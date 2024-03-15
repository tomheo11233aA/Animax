import React from 'react'
import Box from '@common/Box'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import Header from './Header'
import Info from './Info'
import Premium from './Premium'
import List from './List'
import Scroll from '@common/Scroll'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import HeaderLogo from '@components/header/HeaderLogo'

const Profile = () => {
  const color = useTheme()
  const { t } = useTranslation()
  return (
    <>
      <Box paddingHorizontal={20} backgroundColor={color.bg}>
        <HeaderLogo title='Profile' type='more' />
      </Box>
      <KeyBoardSafe>
        <Scroll
          paddingHorizontal={20}
          flex={1}
          marginBottom={BOTTOM_TAB_HEIGHT}
        >
          <Info />
          <Premium t={t} color={color} />
          <List t={t} />
        </Scroll>
      </KeyBoardSafe >
    </>
  )
}

export default Profile
