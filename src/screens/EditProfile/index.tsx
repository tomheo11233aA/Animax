import React from 'react'
import Form from './Form'
import { useTheme } from '@hooks/redux'
import Scroll from '@common/Scroll'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { width, height } from '@utils/responsive'
import Header2 from '@components/header/Header2'

const EditProfile = () => {
  const theme = useTheme()
  return (
    <KeyBoardSafe
      extraRollHeight={50}
    >
      <Scroll
        flex={1}
        paddingHorizontal={width * 0.05}
        paddingVertical={height * 0.01}
        backgroundColor={theme.bg}
      >
        <Header2 title='Edit Profile' />
        <Form />
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(EditProfile)
