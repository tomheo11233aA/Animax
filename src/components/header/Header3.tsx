import React from 'react'
import Box from '@common/Box'
import Img from '@common/Img'
import { fonts } from '@themes/fonts'
import Txt from '@common/Txt'
import { SearchNormal1, MoreCircle } from 'iconsax-react-native'
import Btn from '@common/Btn'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { SVG_ICON_SIZE } from '@themes/styled'
import { width } from '@utils/responsive'
import { goBack } from '@utils/navigationRef'
import { ArrowLeft } from 'iconsax-react-native'
import { Platform } from 'react-native'

interface HeaderLogoProps {
    title: string
    type: 'search' | 'more'
    onPress?: () => void
}

const HeaderLogo = ({ title, type, onPress }: HeaderLogoProps) => {
    const { t } = useTranslation()
    const color = useTheme()
    return (
        <Box row justifySpaceBetween alignCenter
            marginTop={
                Platform.OS === 'ios' ? 0 : 10
            }
        >
            <Btn
                onPress={() => goBack()}>
                <ArrowLeft color={color.black} size={SVG_ICON_SIZE} />
            </Btn>
            <Box
                flex={1}
                marginLeft={20}
            >
                <Txt
                    size={24}
                    fontFamily={fonts.MAINB}
                >
                    {t(title)}
                </Txt>
            </Box>
            <Btn
                marginLeft={20}
                row
                onPress={onPress}
                padding={width * 0.02}
            >
                {type === 'search' ? <SearchNormal1
                    color={color.black}
                    size={SVG_ICON_SIZE}
                /> : <MoreCircle
                    color={color.black}
                    size={SVG_ICON_SIZE}
                />}
            </Btn>
        </Box>
    )
}

export default React.memo(HeaderLogo)