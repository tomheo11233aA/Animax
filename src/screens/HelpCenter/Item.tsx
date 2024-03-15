import React from 'react'
import { height, width } from '@utils/responsive'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { ArrowDown2 } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'
import Box from '@common/Box'
import Btn from '@common/Btn'


interface Props {
    color: any,
    id: number,
    title: string,
    content: string,
    isShow: any,
    toggleShow: any
    t: any
}

const Item = (props: Props) => {
    const { id, title, content, isShow, toggleShow, t, color } = props
    return (
        <Box
            marginTop={height * 0.02}
            backgroundColor={color.bg2}
            radius={width * 0.05}
        >
            <Btn
                row
                alignCenter
                justifySpaceBetween
                onPress={() => toggleShow(id)}
                activeOpacity={0.9}
                padding={width * 0.05}
                radius={width * 0.05}
            >
                <Txt size={16} fontFamily={fonts.MAINB} color={color.white}>
                    {t(title)}
                </Txt>
                <ArrowDown2 color={color.white} size={SVG_ICON_SIZE} variant='Bold' style={{ transform: [{ rotate: isShow[id] ? '180deg' : '0deg' }] }} />
            </Btn>
            {isShow[id] && (
                <Box
                    paddingHorizontal={width * 0.05}
                    paddingBottom={height * 0.02}
                >
                    <Box
                        height={1}
                        width={'100%'}
                        backgroundColor={colors.gray2}
                        marginBottom={height * 0.02}
                    />
                    <Txt>
                        {content}
                    </Txt>
                </Box>
            )}
        </Box>
    )
}

export default Item