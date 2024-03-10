import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { Crown, ArrowRight2 } from 'iconsax-react-native'

interface PremiumProps {
    t: any,
    color: any
}

const Premium = ({ t, color }: PremiumProps) => {
    return (
        <Box marginTop={20} width={'100%'} borderWidth={1} borderColor={'#07df52'} paddingVertical={15} paddingHorizontal={10} row radius={35} alignCenter justifySpaceBetween>
            <Crown color={'#07df52'} size={wp(15)} variant='Bold' />
            <Box marginLeft={20} flex={1}>
                <Txt fontFamily={fonts.MAINB} size={24} color={'#07df52'}>{t('Join Premium!')}</Txt>
                <Txt fontFamily={fonts.MAIN}>{t('Enjoy watching Full-HD animes, without restrictions and ads.')}</Txt>
            </Box>
            <Btn
            // onPress={() => navigate('Premium')}
            >
                <ArrowRight2 size={wp(6)} color={color.mainColor} />
            </Btn>
        </Box>
    )
}

export default Premium