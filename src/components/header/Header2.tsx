import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SVG_ICON_SIZE } from '@themes/styled'
import { ArrowLeft } from 'iconsax-react-native'
import Btn from '@common/Btn'
import { goBack } from '@utils/navigationRef'
import { useTheme } from '@hooks/redux'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import { useTranslation } from 'react-i18next'

interface Props {
    title: string
}

const Header2 = ({ title }: Props) => {
    const color = useTheme()
    const { t } = useTranslation()
    return (
        <>
            <Box row alignCenter
                marginTop={
                    Platform.OS === 'ios' ? 0 : 10
                }
            >
                <Btn
                    onPress={() => goBack()}>
                    <ArrowLeft color={color.black} size={SVG_ICON_SIZE} />
                </Btn>
                <Txt
                    fontFamily={fonts.MAINB}
                    size={24}
                    marginLeft={16}
                >
                    {t(title)}
                </Txt>
            </Box>
        </>
    )
}

export default React.memo(Header2)