import React from 'react'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { goBack } from '@utils/navigationRef'
import CustomIcon from '@common/CustomIcon'

const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box row alignCenter>
        <Btn
          onPress={() => goBack()}>
          <CustomIcon
            name="arrow-back-outline"
            size={18}
          />
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
