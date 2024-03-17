import React from 'react'
import { height, width } from '@utils/responsive'
import { fonts } from '@themes/fonts'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { SvgImage } from '@reuse/SvgImage'

interface Props {
    themeUser: any,
    color: any,
    t: any,
}

const Empty = ({ themeUser, color, t }: Props) => {
    return (
        <>
            {themeUser === 'light' ? (
                <Box
                    height={'100%'}
                >
                    <Box
                        marginTop={height * 0.1}
                        alignCenter
                    >
                        <SvgImage.LightNoData />
                        <Txt marginTop={height * 0.03} size={24} color={color.mainColor} fontFamily={fonts.MAINB} center>
                            {t('Your List is empty')}
                        </Txt>
                        <Txt marginTop={height * 0.03} size={16} width={width * 0.8} color={color.white} center>
                            {t('It seems that you haven\'t added any anime to the list')}
                        </Txt>
                    </Box>
                </Box>
            ) : (
                <Box
                    height={'100%'}
                >
                    <Box
                        marginTop={height * 0.1}
                        alignCenter
                    >
                        <SvgImage.DarkNoData />
                        <Txt marginTop={height * 0.03} size={24} color={color.mainColor} fontFamily={fonts.MAINB} center>
                            {t('Your List is empty')}
                        </Txt>
                        <Txt marginTop={height * 0.03} size={16} width={width * 0.8} color={color.white} center>
                            {t('It seems that you haven\'t added any anime to the list')}
                        </Txt>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default React.memo(Empty)