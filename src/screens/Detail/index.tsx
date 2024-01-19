import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,
{
  useState,
  useEffect,
  useRef,
}
  from 'react'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CommonComponents from '@common/CommonComponents';
import { useTranslation } from 'react-i18next'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import { useTheme } from '@hooks/redux'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import { useAppDispatch } from '@hooks/redux';
import { AppDispatch } from '@redux/store/store';
import { colors } from '@themes/colors'
import { set } from 'lodash'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents

const Detail = () => {
  const { t } = useTranslation()
  const theme = useAppSelector(themeUserSelector)
  const color = useTheme()
  return (
    <Box
      flex={1}
      backgroundColor= {theme === 'dark' ? color.bg : color.bg}
      padding={24}
    >
      <Txt
        fontFamily={fonts.MAIN}
        size={20}
        color={theme === 'dark' ? color.black : color.white}
      >Detail</Txt>
    </Box>
  )
}

export default React.memo(Detail)

const styles = StyleSheet.create({})