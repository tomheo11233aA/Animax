import React from 'react'
import Header from './Header'
import Form from './Form'
import Box from '@common/Box'
import { useTheme } from '@hooks/redux'
import { KeyboardAvoidingView, Platform } from 'react-native';
import Scroll from '@common/Scroll'

const FillProfile = () => {
  const theme = useTheme()
  return (
    <Scroll
      style={{
        justifyContent: 'space-around'
      }}
      padding={24}
      backgroundColor={theme.bg}
      flex={1}
    >
      <Header />
      <Form />
    </Scroll>
  )
}

export default React.memo(FillProfile)
