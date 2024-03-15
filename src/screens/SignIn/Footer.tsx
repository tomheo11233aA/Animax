import React from 'react'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import Box from '@common/Box'
import Btn from '@common/Btn'
import { SvgImage } from '@reuse/SvgImage'
import { width, height } from '@utils/responsive'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { AppDispatch } from '@redux/store/store'
import { setLogin } from '@redux/slice/userSlice'
import Btn100 from '@components/button/Btn100'

interface FooterProps {
    t: any,
    color: any
}

const Footer: React.FC<FooterProps> = ({ t, color }) => {
    const dispatch: AppDispatch = useAppDispatch()
    return (
        <>
            <Btn100
                title={'Sign in'}
                onPress={() => {
                    dispatch(setLogin(true))
                    navigate(screens.MAIN)
                }}
                marginTop={0}
            />
            <Box marginTop={height * 0.06} />

            <Box marginBottom={height * 0.04} row alignCenter justifyCenter>
                <Box width={width * 0.4} height={1} backgroundColor={color.line} />
                <Txt
                    size={width * 0.04}
                    marginLeft={width * 0.04}
                    fontFamily={fonts.MAINB}
                    marginRight={width * 0.04}
                >
                    {t('or continue with')}
                </Txt>
                <Box
                    width={width * 0.4}
                    height={1} backgroundColor={color.line} />
            </Box>

            <Box
                marginBottom={height * 0.04}
                row
                alignCenter
                style={{
                    justifyContent: 'space-evenly'
                }}
            >
                <Btn
                    width={60}
                    height={60}
                    radius={width * 0.04}
                    row
                    alignCenter
                    justifyCenter
                    borderWidth={1}
                    borderColor={colors.gray3}
                    onPress={() => {
                        console.log('login with google')
                    }}
                >
                    <SvgImage.Google width={width * 0.1} height={height * 0.04} />
                </Btn>
                <Btn
                    width={60}
                    height={60}
                    radius={width * 0.04}
                    row
                    alignCenter
                    justifyCenter
                    borderWidth={1}
                    borderColor={colors.gray3}
                    onPress={() => {
                        console.log('login with facebook')
                    }}
                >
                    <SvgImage.Facebook width={width * 0.1} height={height * 0.04} />
                </Btn>
            </Box>
            <Btn row alignCenter justifyCenter
                onPress={() => navigate(screens.SIGNUP)}
            >
                <Txt
                    size={width * 0.04}
                >
                    {t('Don\'t have an account?')}
                </Txt>
                <Txt

                    onPress={() => navigate(screens.SIGNUP)}
                    size={width * 0.04}
                    fontFamily={fonts.MAINB}
                    color={colors.mainColor}
                    marginLeft={width * 0.02}
                >
                    {t('Sign up')}
                </Txt>
            </Btn>
        </>
    )
}

export default Footer
