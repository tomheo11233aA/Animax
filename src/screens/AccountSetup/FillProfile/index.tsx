import React from 'react'
import Header from './Header'
import Form from './Form'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
const FillProfile = () => {
  return (
    <KeyBoardSafe>
      <Scroll
        style={{
          justifyContent: 'space-between'
        }}
        padding={24}
        flex={1}>
        <Header />
        <Form />
      </Scroll>

    </KeyBoardSafe>
  )
}

export default React.memo(FillProfile)
