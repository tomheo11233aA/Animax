import React from 'react'
import Icon from '@common/Icon'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { goBack } from '@utils/navigationRef'

const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box row alignCenter >
        <Btn
          onPress={() => goBack()}>
          <Icon
            source={require('@images/unAuth/back.png')}
            size={18} />
        </Btn>
        <Txt
          fontFamily={fonts.MAINB}
          size={22}
          marginLeft={16}
        >
          {t('Fill Your Profile')}
        </Txt>
      </Box>
    </>
  )
}

export default React.memo(Header)
