import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import Img from '@common/Img'
import Icon from '@common/Icon'
import Btn from '@common/Btn'
import Txt from '@common/Txt'

const Home = () => {
  return (
    <KeyBoardSafe>
      <Box flex={1}>
        <Img
          resizeMode='cover'
          source={require('@images/home/banner1.jpg')}
          style={{
            alignSelf: 'center',
          }}
        />
        <Txt>ạicbaicbisabcihsabcisbacib</Txt>
      </Box>
    </KeyBoardSafe>
  )
}

export default Home