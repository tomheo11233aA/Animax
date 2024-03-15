import React, { } from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { convertLanguage } from '@utils/convert'
import Img from '@common/Img'

interface Props {
    t: any;
    handleChangeLanguage: (lng: string) => void,
    lng: any,
    i18n: any
}

const ItemLanguage = ({ t, handleChangeLanguage, lng, i18n }: Props) => {
    return (
        <Btn width={'100%'} onPress={() => handleChangeLanguage(lng)}>
            <Box
                row
                key={lng}
                paddingVertical={15}
                alignSelf={'flex-start'}
                width={'100%'}
                borderBottomWidth={1}
                borderColor={colors.gray4}
            >
                <Box row alignCenter marginLeft={20}>
                    <Img
                        source={convertLanguage(lng).image}
                        width={30}
                        height={30}
                    />
                    {
                        lng === i18n.language ?

                            <Box row alignCenter justifySpaceBetween width={'85%'}>
                                <Txt marginLeft={20} size={16} fontFamily={fonts.MAINB} color={'black'}>{t(convertLanguage(lng).title)}</Txt>

                                <Txt size={16} color={colors.yellow} center>✓</Txt>

                            </Box>
                            :
                            <Txt marginLeft={20} size={16} fontFamily={fonts.MAINB} color={'black'}>{t(convertLanguage(lng).title)}</Txt>
                    }
                </Box>
            </Box>
        </Btn>
    )
}

export default React.memo(ItemLanguage)