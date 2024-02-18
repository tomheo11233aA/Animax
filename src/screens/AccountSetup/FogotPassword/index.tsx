import { Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import Box from '@common/Box'
import { useTheme } from '@hooks/redux'

const ForgotPassword = () => {
  const theme = useTheme()
  return (
    <Box
      padding={24}
      flex={1}
      backgroundColor={theme.bg}
    >
      <Header />
      <Form/>
      <Footer />
    </Box>
  )
}

export default React.memo(ForgotPassword)
