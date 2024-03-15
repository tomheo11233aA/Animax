import React from 'react'
import Scroll from '@common/Scroll'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import Txt from '@common/Txt'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import Box from '@common/Box'
import Img from '@common/Img'
import Btn from '@common/Btn'
import { goBack } from '@utils/navigationRef'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { SvgImage } from '@reuse/SvgImage'
import { width, height } from '@utils/responsive'
import { ArrowLeft } from 'iconsax-react-native'
import Header1 from '@components/header/Header1'
import Btn100 from '@components/button/Btn100'

const HowToLogin = () => {
    const { t } = useTranslation()
    const color = useTheme()
    return (
        <KeyBoardSafe>
            <Scroll
                paddingHorizontal={width * 0.05}
                paddingVertical={height * 0.01}
                showsVerticalScrollIndicator={false}
            >
                <Header1 />
                <Box alignCenter
                    marginTop={height * 0.01}
                >
                    <Img
                        width={width * 0.6}
                        height={width * 0.6}
                        source={require('@images/viewsignin.jpg')}
                    />
                </Box>
                <Box alignCenter
                    marginTop={height * 0.05}
                >
                    <Txt
                        size={width * 0.1}
                        fontFamily={fonts.MAINB}
                    >
                        {t('Let\'s you in')}
                    </Txt>
                </Box>

                <Box
                    marginTop={height * 0.05}
                >
                    <Btn
                        width={width * 0.9}
                        height={height * 0.07}
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
                        <Txt
                            size={width * 0.04}
                            marginLeft={width * 0.04}
                            fontFamily={fonts.MAINB}
                        >
                            {t('Continue with Facebook')}
                        </Txt>
                    </Btn>
                </Box>
                <Box
                    marginTop={height * 0.05}
                >
                    <Btn
                        width={width * 0.9}
                        height={height * 0.07}
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
                        <Txt
                            size={width * 0.04}
                            marginLeft={width * 0.04}
                            fontFamily={fonts.MAINB}
                        >
                            {t('Continue with Google')}
                        </Txt>
                    </Btn>
                </Box>
                <Box marginVertical={height * 0.04} row alignCenter justifyCenter>
                    <Box width={width * 0.4} height={1} backgroundColor={color.line} />
                    <Txt
                        size={width * 0.04}
                        marginLeft={width * 0.04}
                        fontFamily={fonts.MAINB}
                        marginRight={width * 0.04}
                    >
                        {t('or')}
                    </Txt>
                    <Box
                        width={width * 0.4}
                        height={1} backgroundColor={color.line} />
                </Box>

                {/* <Btn
                    width={width * 0.9}
                    height={height * 0.07}
                    radius={width * 0.1}
                    row
                    alignCenter
                    justifyCenter
                    backgroundColor={colors.mainColor}
                    onPress={() => navigate(screens.SIGNIN)}
                    shadow
                >
                    <Txt
                        size={width * 0.04}
                        fontFamily={fonts.MAINB}
                        color={colors.white}
                    >
                        {t('Sign in with password')}
                    </Txt>
                </Btn> */}
                <Btn100 title='Sign in with password' onPress={() => navigate(screens.SIGNIN)} marginTop={0} />

                <Btn marginTop={height * 0.03} row alignCenter justifyCenter
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
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(HowToLogin)