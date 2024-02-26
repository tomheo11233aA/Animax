import React from 'react'
import Icon from '@common/Icon'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { colors } from '@themes/colors'
import { goBack } from '@utils/navigationRef'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { useTheme } from '@hooks/redux'
import { useAppSelector } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'
import CustomIcon from '@common/CustomIcon'

const Header = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const themeUser = useAppSelector(themeUserSelector)
  return (
    <>
      <Box row alignCenter >
        <Btn
          onPress={() => goBack()}>
          <CustomIcon
            name="arrow-back-outline"
            size={20}
          />
        </Btn>
        <Txt
          fontFamily={fonts.MAINB}
          size={22}
          marginLeft={16}
        >
          {t('Choose Your Interest')}
        </Txt>
      </Box>
      <Txt
        fontWeight={'500'}
        fontFamily={fonts.MAIN}
        size={16}
        marginTop={16}
      >
        {t('Choose your interests and get the best anime recommendations. Don’t worry, you can change them later.')}
      </Txt>
      <Box
        borderBottomWidth={1}
        borderColor={theme.line}
        paddingVertical={10}
      >
        <Txt
          color={'red'}
          fontFamily={fonts.IBMPM}
        >
          {t('Appearance')}
        </Txt>
        <Btn
          onPress={() => navigate(screens.APPEARANCE)}
          row
          justifySpaceBetween
          alignCenter
          marginTop={20}
        >
          <Txt size={13} fontFamily={fonts.SGM} color={theme.black}>
            Appearance
          </Txt>

          <Box row alignCenter>
            <Txt size={13} fontFamily={fonts.SGM} color={'red'} marginRight={10}>
              {themeUser === 'dark' ? t('Dark Mode') : t('Light Mode')}
            </Txt>
            <CustomIcon
              name="arrow-back-outline"
              size={10}
            />
          </Box>
        </Btn>
      </Box>
    </>
  )
}

export default React.memo(Header)
