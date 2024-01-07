import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '@common/Icon'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { colors } from '@themes/colors'
import { goBack } from '@utils/navigationRef'

const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box row alignCenter >
        <Btn
          onPress={() => goBack()}>
          <Icon
            tintColor={'black'}
            source={require('@images/unAuth/back.png')}
            size={18} />
        </Btn>
        <Txt
          fontFamily={fonts.MAINB}
          size={22}
          color={colors.black}
          marginLeft={16}
        >
          {t('Choose Your Interest')}
        </Txt>
      </Box>
      <Txt
        fontWeight={'500'}
        fontFamily={fonts.MAIN}
        size={16}
        color={colors.black}
        marginTop={16}
      >
        {t('Choose your interests and get the best anime recommendations. Don’t worry, you can change them later.')}
      </Txt>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})