import React from 'react'
import Btn from '@common/Btn'
import Box from '@common/Box'
import { Crown } from 'iconsax-react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { localStorage } from '@utils/localStorage'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

interface PremiumProps {
    color: any,
    t: any,
    type: 'monthly' | 'yearly',
    price: number
}

const Item = ({ color, t, type, price }: PremiumProps) => {
    return (
        <Btn
            marginTop={hp(5)}
            width={'100%'}
            borderColor={color.mainColor2}
            borderWidth={1}
            paddingVertical={hp(3)}
            paddingHorizontal={wp(5)}
            alignCenter
            justifyCenter
            radius={wp(8)}
            onPress={() =>{
                localStorage.set('type', type)
                navigate(screens.PAYMENT)
            }}
        >
            <Crown size={wp(20)} color={color.mainColor} variant='Bold' />
            <Box row alignCenter justifyCenter marginTop={hp(2)}>
                <Txt size={32} fontFamily={fonts.MAINB} >
                    {(price).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}

                </Txt>
                <Txt
                    size={18}
                    color={color.white}
                    fontFamily={fonts.MAIN}
                >
                    {' '} {type === 'monthly' ? '/month' : '/year'}
                </Txt>
            </Box>
            <Box height={1} width={'100%'} backgroundColor={color.line} marginTop={hp(2)} />
            <Box marginLeft={wp(5)} row marginTop={hp(2)} width={'100%'}>
                <AntDesign name="check" size={wp(6)} color={color.mainColor} />
                <Txt size={16} color={color.white} fontFamily={fonts.MAIN} marginLeft={wp(5)}>
                    {t('Watch all you want. Ad-free.')}
                </Txt>
            </Box>

            <Box marginLeft={wp(5)} row marginTop={hp(2)} width={'100%'}>
                <AntDesign name="check" size={wp(6)} color={color.mainColor} />
                <Txt size={16} color={color.white} fontFamily={fonts.MAIN} marginLeft={wp(5)}>
                    {t('Allows streaming of 4K.')}
                </Txt>
            </Box>

            <Box marginLeft={wp(5)} row marginTop={hp(2)} width={'100%'}>
                <AntDesign name="check" size={wp(6)} color={color.mainColor} />
                <Txt size={16} color={color.white} fontFamily={fonts.MAIN} marginLeft={wp(5)}>
                    {t('Video & Audio Quality is Better.')}
                </Txt>
            </Box>

        </Btn>
    )
}

export default Item