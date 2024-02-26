import React from 'react'
import Icon from '@common/Icon'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { goBack } from '@utils/navigationRef'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomIcon from '@common/CustomIcon'

const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box row alignCenter
        marginTop={hp('4%')}
        padding={10}
      >
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
          {t('Sort & Filter')}
        </Txt>
      </Box>
    </>
  )
}

export default React.memo(Header)
