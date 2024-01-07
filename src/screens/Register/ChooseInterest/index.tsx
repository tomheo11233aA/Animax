import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import Box from '@common/Box'
import { colors } from '@themes/colors'

const ChooseInterest = () => {
  return (
    <Box
      padding={24}
      flex={1}
      backgroundColor={colors.white}>
      <Header />
      <Form />
      <Footer />
    </Box>
  )
}

export default React.memo(ChooseInterest)

