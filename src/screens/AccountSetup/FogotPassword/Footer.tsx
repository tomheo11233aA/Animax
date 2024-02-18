import React from 'react'
import Box from '@common/Box';
import Btn from '@common/Btn';
import Txt from '@common/Txt';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';

const Footer = () => {
  const { t } = useTranslation();
  const theme = useAppSelector(themeUserSelector);
  return (
    <Box marginTop={15} row justifyCenter style={{ justifyContent: 'space-between' }}>
      
      <Btn
        width={'100%'}
        height={'35%'}
        radius={wp('8%')}
        backgroundColor={colors.mainColor}
        shadow
        shadowColor={'#41ab67'}
        elevation={5}
        onPress={() => navigate(screens.FILL_PROFILE)}
      >
        <Txt
          color={colors.white}
          size={14}
          fontWeight={'bold'}
          fontFamily={fonts.MAIN}
        >
          {t('Continue')}
        </Txt>
      </Btn>
    </Box>
  )
}

export default React.memo(Footer)
