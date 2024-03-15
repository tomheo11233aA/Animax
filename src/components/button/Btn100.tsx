import React from 'react'
import { width, height } from '@utils/responsive'
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'

interface Btn100Props {
    onPress: () => void
    title: string
    marginTop?: number
    marginBottom?: number
    backgroundColor?: string
}

const Btn100 = ({ onPress, title, marginTop = height * 0.05, marginBottom = 0, backgroundColor = colors.mainColor }: Btn100Props) => {
    const { t } = useTranslation()
    return (
        <Btn
            width={'100%'}
            radius={width * 0.08}
            backgroundColor={backgroundColor}
            shadow
            shadowColor={colors.mainColor}
            elevation={5}
            onPress={() => {
                onPress()
            }}
            marginTop={marginTop}
            marginBottom={marginBottom}
            height={height * 0.07}
        >
            <Txt
                color={colors.white}
                size={16}
                fontFamily={fonts.MAINB}
            >
                {t(title)}
            </Txt>
        </Btn>
    )
}

export default React.memo(Btn100)