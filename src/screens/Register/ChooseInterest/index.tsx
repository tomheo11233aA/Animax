import React from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import Box from '@common/Box'
import KeyBoardSafe from '@reuse/KeyBoardSafe'

const ChooseInterest = () => {
  return (
    <KeyBoardSafe>
      <Box
        padding={24}
        flex={1}>
        <Header />
        <Form />
        <Footer />
      </Box>
    </KeyBoardSafe>
  )
}

export default React.memo(ChooseInterest)

