import React from 'react'
import Header from './Header'
import Form from './Form'
import Box from '@common/Box'
import { useTheme } from '@hooks/redux'
import Scroll from '@common/Scroll'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Platform } from 'react-native'

const FillProfile = () => {
  const theme = useTheme()
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={20}
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: theme.bg
      }}
    >
      <Header />
      <Form />
    </KeyboardAwareScrollView>
  )
}

export default React.memo(FillProfile)
