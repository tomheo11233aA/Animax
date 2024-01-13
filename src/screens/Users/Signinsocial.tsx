import React from 'react'
import Scroll from '@common/Scroll'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import Txt from '@common/Txt'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Box from '@common/Box'
import Img from '@common/Img'
import Btn from '@common/Btn'
import Icon from '@common/Icon'
import { goBack } from '@utils/navigationRef'
import { useTranslation } from 'react-i18next'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import { useTheme } from '@hooks/redux' 

const Signinsocial = () => {
    const { t } = useTranslation()
    const theme = useAppSelector(themeUserSelector)
    const color = useTheme()
    return (
        <KeyBoardSafe>
            <Scroll
                padding={24}
                showsVerticalScrollIndicator={false}>
                <Btn alignSelf={'flex-start'}
                    onPress={() => goBack()}
                >
                    <Icon size={24} source={require('@images/back.png')} />
                </Btn>
                <Box alignCenter marginTop={hp('3%')}>
                    <Img
                        width={wp('60%')}
                        height={wp('60%')}
                        source={require('@images/viewsignin.jpg')}
                    />
                </Box>
                <Box alignCenter marginTop={hp('3%')}>
                    <Txt
                        size={wp('13%')}
                        fontFamily={fonts.MAINB}
                    >
                        {t('Let\'s you in')}
                    </Txt>
                </Box>
                <Box marginTop={hp('4%')}>
                    <Btn
                        width={wp('90%')}
                        height={hp('6%')}
                        radius={wp('4%')}
                        row
                        alignCenter
                        justifyCenter
                        borderWidth={1}
                    >
                        <Img
                            width={wp('5%')}
                            height={wp('5%')}
                            source={require('@images/facebook.png')}
                        />
                        <Txt
                            size={wp('4%')}
                            fontFamily={fonts.MAINB}
                            marginLeft={wp('4%')}
                        >
                            {t('Continue with Facebook')}
                        </Txt>
                    </Btn>
                </Box>
                <Box marginTop={hp('3%')}>
                    <Btn
                        width={wp('90%')}
                        height={hp('6%')}
                        radius={wp('4%')}
                        row
                        alignCenter
                        justifyCenter
                        borderWidth={1}
                    >
                        <Img
                            width={wp('5%')}
                            height={wp('5%')}
                            source={require('@images/google.png')}
                        />
                        <Txt
                            size={wp('4%')}
                            fontFamily={fonts.MAINB}
                            marginLeft={wp('4%')}
                        >
                            {t('Continue with Google')}
                        </Txt>
                    </Btn>
                </Box>
                <Box marginTop={hp('3%')}>
                    <Btn
                        width={wp('90%')}
                        height={hp('6%')}
                        radius={wp('4%')}
                        row
                        alignCenter
                        justifyCenter
                        borderWidth={1}
                    >
                        <Img
                            width={wp('5%')}
                            height={wp('5%')}
                            source={require('@images/unAuth/apple.png')}
                            tintColor={theme === 'light' ? colors.black : colors.white}
                        />
                        <Txt
                            size={wp('4%')}
                            fontFamily={fonts.MAINB}
                            marginLeft={wp('4%')}
                        >
                            {t('Continue with Apple')}
                        </Txt>
                    </Btn>
                </Box>
                <Box marginVertical={hp('4%')} row alignCenter justifyCenter>
                    <Box width={wp('38%')} height={1} backgroundColor={color.line} />
                    <Txt
                        size={wp('4%')}
                        fontFamily={fonts.MAINB}
                        marginLeft={wp('4%')}
                        marginRight={wp('4%')}
                    >
                        {t('or')}
                    </Txt>
                    <Box width={wp('38%')} height={1} backgroundColor={color.line} />
                </Box>
                <Box>
                    <Btn
                        width={wp('90%')}
                        height={hp('6%')}
                        radius={wp('10%')}
                        row
                        alignCenter
                        justifyCenter
                        backgroundColor={colors.mainColor}
                        onPress={() => navigate(screens.CHOOSE_INTEREST)}
                    >
                        <Txt
                            size={wp('4%')}
                            fontFamily={fonts.MAINB}
                            color={colors.white}
                        >
                            {t('Sign in with password')}
                        </Txt>
                    </Btn>
                </Box>
                <Box marginTop={hp('3%')} row alignCenter justifyCenter>
                    <Txt
                        size={wp('4%')}
                    >
                        {t('Don\'t have an account?')}
                    </Txt>
                    <Txt
                        onPress={() => navigate(screens.SIGNUP)}
                        size={wp('4%')}
                        fontFamily={fonts.MAINB}
                        color={colors.mainColor}
                        marginLeft={wp('2%')}
                    >
                        {t('Sign up')}
                    </Txt>

                </Box>
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(Signinsocial)