import React from 'react'
import Btn from '@common/Btn'
import { ArrowLeft, Scanner } from 'iconsax-react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Txt from '@common/Txt'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import Box from '@common/Box'

interface PaymentProps {
    color: any,
    t: any
}

const Header = ({ t, color }: PaymentProps) => {
    return (
        <Box row alignCenter marginTop={hp(2)} width={'100%'}>
            <Btn
                onPress={() => goBack()}
            >
                <ArrowLeft size={wp(5)} color={color.white} />
            </Btn>
            <Txt flex={1} size={24} fontFamily={fonts.MAINB} color={color.white} marginLeft={wp(5)}>
                {t('Payment')}
            </Txt>
            <Btn
            >
                <Scanner size={wp(5)} color={color.white} />
            </Btn>
        </Box>
    )
}

export default Header