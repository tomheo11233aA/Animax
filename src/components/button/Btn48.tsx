import React from 'react'
import { width, height } from '@utils/responsive'
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import Box from '@common/Box'

interface Btn48Props {
    marginTop?: number
    marginBottom?: number
    onLeftPress?: () => void
    leftTitle?: string
    onRightPress?: () => void
    rightTitle?: string
    backgroundLeftColor?: string
    backgroundRightColor?: string
}

const Btn48 =
    ({
        leftTitle = 'Cancel',
        marginTop = height * 0.05,
        marginBottom = 0,
        onRightPress,
        onLeftPress,
        rightTitle = 'Save',
        backgroundLeftColor ='#35383f',
        backgroundRightColor = colors.mainColor
    }: Btn48Props) => {
        const { t } = useTranslation()
        return (
            <Box
                row
                width={'100%'}
                justifySpaceBetween
                marginTop={marginTop}
                marginBottom={marginBottom}
                height={height * 0.1}
            >
                <Btn
                    width={'45%'}
                    radius={width * 0.08}
                    backgroundColor={backgroundLeftColor}
                    onPress={onLeftPress}
                    height={height * 0.07}
                    marginLeft={width * 0.02}
                >
                    <Txt
                        color={colors.white}
                        size={16}
                        fontFamily={fonts.MAINB}
                    >
                        {t(leftTitle)}
                    </Txt>
                </Btn>
                <Btn
                    width={'45%'}
                    radius={width * 0.08}
                    backgroundColor={backgroundRightColor}
                    shadow
                    shadowColor={colors.mainColor}
                    elevation={10}
                    onPress={onRightPress}
                    height={height * 0.07}
                    marginRight={width * 0.02}
                >
                    <Txt
                        color={colors.white}
                        size={16}
                        fontFamily={fonts.MAINB}
                    >
                        {t(rightTitle)}
                    </Txt>
                </Btn>
            </Box>

        )
    }

export default React.memo(Btn48)