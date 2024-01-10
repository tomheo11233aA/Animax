import React from 'react'
import Box from '@common/Box'
import Input from '@common/Input'
import Img from '@common/Img'
import Btn from '@common/Btn'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { fonts } from '@themes/fonts'
import { fillProfileSchema } from './Validation/formValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import { useTranslation } from 'react-i18next';
import Txt from '@common/Txt';
import { colors } from '@themes/colors';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';
import { useTheme } from '@hooks/redux'

const Form = () => {
    const { t } = useTranslation();
    const theme = useAppSelector(themeUserSelector);
    const color = useTheme()
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(fillProfileSchema)
    });
    const handleContinue = () => {
        navigate(screens.FORGOT_PASSWORD)
    }
    return (
        <Box marginTop={20} relative>
            <Box>
                <Img
                    source={require('@images/unAuth/user.png')}
                    alignSelf={'center'}
                    width={wp('30%')}
                    height={hp('15%')}
                    radius={wp('50%') / 2}
                />
                <Btn onPress={() => { }}>
                    <Img
                        source={require('@images/unAuth/edit.png')}
                        absolute
                        bottom={0}
                        right={0}
                        radius={wp('50%') / 2}
                        width={32}
                        height={32}
                        style={{
                            marginRight: wp('28%')
                        }}
                    />
                </Btn>
            </Box>
            <Box marginTop={hp(4)}>
                <Input
                    radius={wp('4%')}
                    height={hp(7)}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Full name'}
                    font={fonts.MAIN}
                    hintColor={'#b6bdc7'}
                    onChangeText={(text: string) => setValue('fullName', text)}
                    color={theme === 'light' ? color.black : color.white}
                />
                {errors.fullName && <Txt color={'red'} size={14} marginTop={hp(1)}>{errors.fullName?.message}</Txt>}
                <Input
                    radius={wp('5%')}
                    height={hp(7)}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Nickname'}
                    hintColor={'#b6bdc7'}
                    marginTop={hp(3)}
                    font={fonts.MAIN}
                    onChangeText={(text: string) => setValue('nickName', text)}
                    color={theme === 'light' ? color.black : color.white}
                />
                {errors.nickName && <Txt color={'red'} size={14} marginTop={hp(1)}>{errors.nickName?.message}</Txt>}
                <Input
                    radius={wp('4%')}
                    height={hp(7)}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Email'}
                    hintColor={'#b6bdc7'}
                    marginTop={hp(3)}
                    font={fonts.MAIN}
                    iconTwo={require('@images/unAuth/mail.png')}
                    sizeIcon={18}
                    onChangeText={(text: string) => setValue('email', text)}
                    color={theme === 'light' ? color.black : color.white}
                />
                {errors.email && <Txt color={'red'} size={14} marginTop={hp(1)}>{errors.email?.message}</Txt>}
                <Input
                    radius={wp('4%')}
                    height={hp(7)}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Phone Number'}
                    marginTop={hp(3)}
                    font={fonts.MAIN}
                    hintColor={'#b6bdc7'}
                    onChangeText={(text: string) => setValue('phoneNumber', text)}
                    color={theme === 'light' ? color.black : color.white}
                />
                {errors.phoneNumber && <Txt color={'red'} size={14} marginTop={hp(1)}>{errors.phoneNumber?.message}</Txt>}
                <Input
                    radius={wp('4%')}
                    height={hp(7)}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Gender'}
                    marginTop={hp(3)}
                    font={fonts.MAIN}
                    hintColor={'#b6bdc7'}
                    onChangeText={(text: string) => setValue('gender', text)}
                    color={theme === 'light' ? color.black : color.white}
                />
                {errors.gender && <Txt color={'red'} size={14} marginTop={hp(1)}>{errors.phoneNumber?.message}</Txt>}
            </Box>
            <Box marginTop={hp(10)}>
                <Box row justifyCenter style={{ justifyContent: 'space-between' }}>
                    <Btn
                        width={'48%'}
                        padding={wp('4%')}
                        radius={wp('8%')}
                        backgroundColor={theme === 'light' ? colors.lMainColor2 : colors.black3}
                        onPress={() => navigate(screens.FILL_PROFILE)}
                    >
                        <Txt
                            color={theme === 'light' ? colors.mainColor : colors.white}
                            size={14}
                            fontWeight={'bold'}
                            fontFamily={fonts.MAIN}
                        >
                            {t('Skip')}
                        </Txt>
                    </Btn>
                    <Btn
                        width={'48%'}
                        radius={wp('8%')}
                        backgroundColor={colors.mainColor}
                        shadow
                        shadowColor={'#41ab67'}
                        elevation={5}
                        onPress={handleSubmit(handleContinue)}
                    >
                        <Txt
                            color={colors.white}
                            size={14}
                            fontWeight={'bold'}
                            fontFamily={fonts.MAIN}
                        >
                            {t('Continue')}
                        </Txt>
                    </Btn>
                </Box>
            </Box>
        </Box>
    )
}

export default Form
