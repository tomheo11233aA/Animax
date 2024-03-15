import React from 'react'
import Form from './Form'
import { useTheme } from '@hooks/redux'
import Scroll from '@common/Scroll'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { width, height } from '@utils/responsive'
import Header2 from '@components/header/Header2'

const FillProfile = () => {
  const theme = useTheme()
  return (
    <KeyBoardSafe
      extraRollHeight={50}
    >
      <Scroll
        flex={1}
        paddingHorizontal={width * 0.05}
        backgroundColor={theme.bg}
      >
        <Header2 title='Fill Your Profile' />
        <Form />
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(FillProfile)
