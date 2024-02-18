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

const Header = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeUser = useAppSelector(themeUserSelector)
    return (
        <>
          <Box row alignCenter >
            <Btn
              onPress={() => goBack()}>
              <Icon
                source={require('@images/unAuth/back.png')}
                size={25} />
            </Btn>
            <Txt
              fontFamily={fonts.MAINB}
              size={22}
              marginLeft={16}
            >
              {t('Forgot Password')}
            </Txt>
          </Box>
        </>
      )
    }
    
    export default React.memo(Header)