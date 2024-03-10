import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { Crown, ArrowRight2 } from 'iconsax-react-native'
import { screens } from '@contants/screens'
import { navigate } from '@utils/navigationRef'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface PremiumProps {
    t: any,
    color: any
}

const Premium = ({ t, color }: PremiumProps) => {
    return (
        <Btn
            onPress={() => navigate(screens.PREMIUM)}
            marginTop={20}
            width={'100%'}
            borderWidth={1}
            borderColor={color.mainColor2}
            paddingVertical={wp(5)}
            paddingHorizontal={wp(5)}
            row
            radius={35}
            alignCenter
            justifySpaceBetween
        >
            <Crown color={color.mainColor2} size={wp(15)} variant='Bold' />
            <Box marginLeft={20} flex={1}>
                <Txt fontFamily={fonts.MAINB} size={24} color={color.mainColor2}>{t('Join Premium!')}</Txt>
                <Txt fontFamily={fonts.MAIN}>{t('Enjoy watching Full-HD animes, without restrictions and ads.')}</Txt>
            </Box>
            <ArrowRight2 size={wp(6)} color={color.mainColor} />
        </Btn>
    )
}

export default Premium