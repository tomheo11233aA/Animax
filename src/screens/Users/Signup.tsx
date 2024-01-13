import {
    StyleSheet
} from 'react-native'
import React, {
    useState,
    useEffect
} from 'react'
import CheckBox from '@react-native-community/checkbox';
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CommonComponents from '@common/CommonComponents';
import { useTranslation } from 'react-i18next'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import { useTheme } from '@hooks/redux'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import { use } from 'i18next';

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents



const Signup = () => {
    const { t } = useTranslation()
    const theme = useAppSelector(themeUserSelector)
    const color = useTheme()

    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [colorOption, setColorOption] = useState(1); // 1: light, 2: dark

    const handleFocus = (a: any) => {
        a === 'email' ? setIsFocused(true) : setIsFocused2(true);
    };

    const handleBlur = (a: any) => {
        a === 'email' ? setIsFocused(false) : setIsFocused2(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (theme === 'light') {
            setColorOption(1);
        } else {
            setColorOption(2);
        }
    }, [theme]);

    // Xác định màu sắc dựa trên các điều kiện
    let focustColor;
    switch (colorOption) {
        case 1:
            focustColor = '#EBFAF1';
            break;
        case 2:
            focustColor = '#162723';
            break;
        default:
            focustColor = 'red';
    }


    return (
        <KeyBoardSafe>
            <Box style={styles.container}>
                <Box style={styles.Vback}>
                    <Btn
                        onPress={() => goBack()}
                    >
                        <Icon size={24} source={require('@images/back.png')} />
                    </Btn>
                </Box>

                <Box style={styles.VImg}>
                    <Img
                        style={styles.Img}
                        source={require('@images/avatar.png')} />
                </Box>
                <Box style={styles.content}>
                    <Txt
                        // style={styles.TxtContent}
                        size={wp('7%')}
                        fontFamily={fonts.MAINB}
                    >{t('Create Your Account')}</Txt>
                </Box>

                <Box
                    style={[styles.Vinput,
                    { borderColor: isFocused ? color.mainColor : color.bg },
                        // { backgroundColor: isFocused ? '#EBFAF1' : '#FAFAFA' }
                    ]}
                    backgroundColor={isFocused ? focustColor : theme === 'light' ? color.input : color.input}
                >
                    <Img
                        style={[
                            styles.icon,
                            { tintColor: isFocused ? '#06C149' : '#B4B4B4' }
                        ]}
                        source={require('@images/email.png')}
                    />
                    <Input
                        style={styles.input}
                        hint="Email"
                        hintColor="#B4B4B4"
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        color={theme === 'light' ? color.black : color.white}
                        font={fonts.MAIN}
                    />

                </Box>
                <Box
                    style={
                        [styles.Vinput,
                        { borderColor: isFocused2 ? color.mainColor : color.bg },
                            // { backgroundColor: isFocused2 ? '#EBFAF1' : '#FAFAFA' }
                        ]
                    }
                    backgroundColor={isFocused2 ? focustColor : theme === 'light' ? color.input : color.input}
                >
                    <Img
                        style={[
                            styles.icon,
                            { tintColor: isFocused2 ? '#06C149' : '#B4B4B4' }
                        ]}
                        source={require('@images/padlock.png')}
                    />
                    <Input
                        style={styles.input}
                        hint="Password"
                        hintColor="#B4B4B4"
                        security={!showPassword}
                        onFocus={() => handleFocus('password')}
                        onBlur={() => handleBlur('password')}
                        color={theme === 'light' ? color.black : color.white}
                        font={fonts.MAIN}
                    />
                    <Btn
                        style={styles.VtoggleIcon}
                        onPress={togglePasswordVisibility}>
                        <Img
                            style={[
                                styles.toggleIcon,
                                { tintColor: isFocused2 ? '#06C149' : '#B4B4B4' }
                            ]}

                            source={showPassword ? require('@images/eye.png') : require('@images/hidden.png')}
                        />
                    </Btn>

                </Box>
                <Box
                    style={styles.Vcheckbox}
                >
                    <CheckBox
                        disabled={false}
                        value={isChecked}
                        onValueChange={(newValue) => setChecked(newValue)}
                        tintColors={{ true: '#06C149', false: '#06C149' }}
                    />
                    <Txt
                        style={styles.Txt}
                    >{t('Remember me')}</Txt>

                </Box>

                <Btn
                    style={styles.buttonSignin}
                >
                    <Txt
                        style={styles.Txt2}
                    >{t('Sign up')} </Txt>
                </Btn>
                <Box style={styles.or}>
                    <Box style={styles.line} />
                    <Txt style={styles.orTxt}>
                        {t('or continue with')}
                    </Txt>
                    <Box style={styles.line} />
                </Box>
                <Box style={styles.VButtonSocial}>
                    <Btn
                        style={styles.buttonSocial}
                    >
                        <Img
                            style={{ width: 24, height: 24 }}
                            source={require('@images/google.png')}
                        />
                    </Btn>
                    <Btn
                        style={styles.buttonSocial}
                    >
                        <Img
                            style={{ width: 24, height: 24 }}
                            source={require('@images/facebook.png')}
                        />
                    </Btn>
                </Box>
                <Box style={styles.signup}>
                    <Txt
                        style={styles.Txt3}
                    >{t('Already have an account?')}</Txt>
                    <Btn>
                        <Txt
                            onPress={() => navigate(screens.SIGNINSOCIAL)}
                            style={styles.TxtSignup}
                        >{t('Sign in')}</Txt>
                    </Btn>
                </Box>
            </Box>
        </KeyBoardSafe>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
        padding: 24,
    },
    Vback: {
        position: 'absolute',
        top: 24,
        left: 24,
        width: 24,
        height: 24,
    },
    backicon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    VImg: {
        width: '100%',
        height: 200,
        borderRadius: 50,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    Img: {
        width: 200,
        height: 200,
        borderRadius: 40,
    },
    content: {
        alignItems: 'center',
        marginBottom: 30,
    },
    TxtContent: {
        fontSize: 30,
        fontWeight: '500',
        color: '#000',
    },
    Txt: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 8,
    },
    Vinput: {
        width: '100%',
        height: 60,
        // backgroundColor: '#FAFAFA',
        borderRadius: 15,
        borderWidth: 1,
        // borderColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 16,
        padding: 8,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 16,
        marginLeft: 16,
        tintColor: '#B4B4B4',
    },
    input: {
        height: 60,
        width: '75%',
        overflow: 'hidden',
    },
    toggleIcon: {
        width: 24,
        height: 24,
        marginLeft: 8,
        tintColor: '#B4B4B4',
    },
    VtoggleIcon: {
        position: 'absolute',
        right: 16,
        top: 18,
        // backgroundColor: 'red',
    },
    Vcheckbox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
    },
    VButtonSocial: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonSocial: {
        width: 85,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 32,
        marginHorizontal: 8,
    },
    or: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
        marginTop: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#DDDDDD',
        marginHorizontal: 8,
    },
    orTxt: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonSignin: {
        width: '100%',
        height: 60,
        backgroundColor: '#06C149',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        borderRadius: 50,
    },
    Txt2: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    signup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Txt3: {
        color: '#bbbbbb',
        fontSize: 16,
        fontWeight: '400',
    },
    TxtSignup: {
        color: '#06C149',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 8,
    },
})