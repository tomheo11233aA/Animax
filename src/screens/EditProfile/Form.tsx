import React, { useRef } from 'react'
import Box from '@common/Box'
import Input from '@common/Input'
import Img from '@common/Img'
import Btn from '@common/Btn'
import { fonts } from '@themes/fonts'
import { fillProfileSchema } from './Validation/formValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import { useTranslation } from 'react-i18next';
import Txt from '@common/Txt';
import { colors } from '@themes/colors';
import { useTheme } from '@hooks/redux'
import { SelectList } from 'react-native-dropdown-select-list'
import { width, height } from '@utils/responsive'
import { MessageText, ArrowDown2 } from 'iconsax-react-native'

const Form = () => {
    const { t } = useTranslation();
    const theme = useAppSelector(themeUserSelector);
    const color = useTheme()
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(fillProfileSchema)
    });
    const handleContinue = () => {
        console.log('Continue')
    }
    const [, setSelectedGender] = React.useState('');
    const [, setEmail] = React.useState('');
    const gender = [
        { key: '1', value: t('Male') },
        { key: '2', value: t('Female') },
        { key: '3', value: t('Other') },
    ]

    const fullNameRef = useRef<any>(null);
    const nickNameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const phoneRef = useRef<any>(null);
    return (
        <Box
            height={'100%'}
        >
            <Box marginTop={height * 0.04} flex={1}>
                <Input
                    backgroundColor={color.black3}
                    radius={width * 0.04}
                    height={height * 0.07}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Full name'}
                    font={fonts.MAIN}
                    hintColor={'#888888'}
                    onChangeText={(text: string) => setValue('fullName', text)}
                    color={theme === 'light' ? color.black : color.white}
                    returnKeyType='next'
                    onSubmitEditing={() => nickNameRef.current?.focus()}
                    ref={fullNameRef}
                    value={'Văn Nam Phúc'}
                />
                {errors.fullName && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.fullName?.message}</Txt>}
                <Input
                    backgroundColor={color.black3}
                    radius={width * 0.05}
                    height={height * 0.07}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Nickname'}
                    hintColor={'#888888'}
                    marginTop={height * 0.03}
                    font={fonts.MAIN}
                    onChangeText={(text: string) => setValue('nickName', text)}
                    color={theme === 'light' ? color.black : color.white}
                    returnKeyType='next'
                    onSubmitEditing={() => emailRef.current?.focus()}
                    ref={nickNameRef}
                    value={'tomheo11233'}
                />
                {errors.nickName && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.nickName?.message}</Txt>}

                <Input
                    backgroundColor={color.black3}
                    radius={width * 0.04}
                    height={height * 0.07}
                    width={'100%'}
                    borderWidth={1}
                    hint={'Email'}
                    hintColor={'#888888'}
                    marginTop={height * 0.03}
                    font={fonts.MAIN}
                    onChangeText={(text: string) => {
                        setValue('email', text);
                        setEmail(text);
                    }}
                    color={theme === 'light' ? color.black : color.white}
                    returnKeyType='next'
                    keyboardType='email-address'
                    onSubmitEditing={() => phoneRef.current?.focus()}
                    ref={emailRef}
                    value={'phucnamvan@gmail.com'}
                    isSvg
                    iconTwo={<MessageText color={color.white} size={width * 0.06} />}
                />
                {errors.email && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.email?.message}</Txt>}
                <Btn
                    row
                    marginTop={height * 0.03}
                    width={width * 0.9}
                    height={height * 0.07}
                    backgroundColor={color.black3}
                    radius={width * 0.05}
                    alignCenter
                    paddingHorizontal={width * 0.03}
                    justifySpaceBetween
                >
                    <Txt marginLeft={16} size={16} color={color.black}>{'Việt Nam'}</Txt>
                    <ArrowDown2 variant='Bold' color={color.white} size={width * 0.06} />
                </Btn>

                <SelectList
                    data={gender}
                    setSelected={(selectedItem: any) => {
                        setSelectedGender(selectedItem)
                        setValue('gender', selectedItem)
                    }}
                    placeholder='Choose gender'
                    fontFamily={fonts.MAIN}
                    boxStyles={{
                        marginTop: height * 0.03, borderWidth: 0,
                        backgroundColor: theme === 'light' ? color.black3 : color.black3,
                        height: height * 0.07, borderRadius: width * 0.04, borderColor: theme === 'light' ? color.black3 : color.black3,
                    }}
                    inputStyles={{
                        color: theme === 'light' ? color.black : color.white,
                        alignSelf: 'center',
                    }}
                    dropdownTextStyles={{
                        color: theme === 'light' ? color.black : color.white,
                    }}
                    search={false}
                    arrowicon={theme === 'light' ?
                        <Img
                            source={require('@images/unAuth/down_black.png')}
                            width={width * 0.03}
                            height={height * 0.015}
                            style={{
                                alignSelf: 'center'
                            }}
                        />
                        :
                        <Img
                            source={require('@images/unAuth/down_white.png')}
                            width={width * 0.03}
                            height={height * 0.015}
                            style={{
                                alignSelf: 'center'
                            }}
                        />}
                />
                {errors.gender && <Txt color={'red'} size={14} marginTop={height * 0.01}>{errors.gender?.message}</Txt>}
            </Box>
            <Box row style={{ justifyContent: 'space-between' }} marginBottom={height * 0.05}>
                <Btn
                    width={'100%'}
                    height={height * 0.07}
                    radius={width * 0.08}
                    backgroundColor={colors.mainColor}
                    shadow
                    shadowColor={colors.lMainColor2}
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
    )
}

export default React.memo(Form)
