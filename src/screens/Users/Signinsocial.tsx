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
//google, facebook
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useLogger, ANSI_COLOR_CODES } from '@utils/logger'
import { LoginManager, Profile, AccessToken } from 'react-native-fbsdk-next'
import FacebookIcon from '../../assets/images/svg/facebook.svg'
import GoogleIcon from '../../assets/images/svg/google.svg'

const Signinsocial = () => {
    const { t } = useTranslation()
    const theme = useAppSelector(themeUserSelector)
    const color = useTheme()
    const logger = useLogger('Signinsocial', ANSI_COLOR_CODES.fgYellow)

    const handleLoginWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        })

        try {
            await GoogleSignin.signIn()
            const userInfo = await GoogleSignin.signIn()
            logger(userInfo)
        } catch (error: any) {
            logger(error)
        }

    }

    const handleLoginWithFacebook = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile'])
            if (result.isCancelled) {
                logger('Login was cancelled')
            } else {
                const data = await AccessToken.getCurrentAccessToken();
                if (data) {
                    const accessToken = data.accessToken.toString();
                    logger('Access Token: ' + accessToken);
                    const profile = await Profile.getCurrentProfile();
                    if (profile) {
                        logger(profile);
                    } else {
                        logger('Profile not found');
                    }
                }
            }
        } catch (error: any) {
            logger(error)
            if (error.code === 'EUNSPECIFIED') {
                LoginManager.logOut()
                LoginManager.logInWithPermissions(['public_profile'])
            }
        }
    }

    return (
        <KeyBoardSafe>
            <Scroll
                padding={24}
                showsVerticalScrollIndicator={false}>
                <Btn alignSelf={'flex-start'}
                    onPress={() => goBack()}
                >
                    <Icon size={18} source={require('@images/back.png')} />
                </Btn>
                <Box alignCenter marginTop={hp('3%')}>
                    <Img
                        width={wp('60%')}
                        height={wp('60%')}
                        source={require('@images/viewsignin.jpg')}
                    />
                </Box>
                <Box alignCenter marginTop={hp('5%')}>
                    <Txt
                        size={wp('13%')}
                        fontFamily={fonts.MAINB}
                    >
                        {t('Let\'s you in')}
                    </Txt>
                </Box>

                <Box marginTop={hp('5%')}>
                    <Btn
                        width={wp('90%')}
                        height={hp('7%')}
                        radius={wp('4%')}
                        row
                        alignCenter
                        justifyCenter
                        borderWidth={1}
                        onPress={handleLoginWithFacebook}
                    >
                        <FacebookIcon width={wp('7%')} height={wp('7%')} />
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
                        height={hp('7%')}
                        radius={wp('4%')}
                        row
                        alignCenter
                        justifyCenter
                        borderWidth={1}
                        onPress={handleLoginWithGoogle}
                    >
                        <GoogleIcon width={wp('7%')} height={wp('7%')} />
                        <Txt
                            size={wp('4%')}
                            fontFamily={fonts.MAINB}
                            marginLeft={wp('4%')}
                        >
                            {t('Continue with Google')}
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
                        height={hp('7%')}
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