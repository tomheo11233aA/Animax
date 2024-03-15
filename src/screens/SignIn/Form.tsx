import React from 'react'
import { fonts } from '@themes/fonts'
import { width, height } from '@utils/responsive'
import Input from '@common/Input'
import Txt from '@common/Txt'
import { ArrowSquareDown, Lock, Eye, EyeSlash } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'

interface FormProps {
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    security: boolean
    setSecurity: (security: boolean) => void
    color: any,
    t: any
}

const Form: React.FC<FormProps> = ({
    t,
    email,
    setEmail,
    password,
    setPassword,
    security,
    setSecurity,
    color
}) => {
    return (
        <>
            <Input
                height={height * 0.07}
                width={width * 0.9}
                hint={t('Email')}
                hintColor={'#5f5f5f'}
                backgroundColor={color.input}
                radius={width * 0.05}
                color={color.white}
                font={fonts.MAIN}
                sizeIcon={width * 0.06}
                isSvg
                iconOne={<ArrowSquareDown color={color.white} size={SVG_ICON_SIZE} variant='Bold' />}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                marginTop={height * 0.04}
                height={height * 0.07}
                width={width * 0.9}
                hint={t('Password')}
                hintColor={'#5f5f5f'}
                backgroundColor={color.input}
                radius={width * 0.05}
                color={color.white}
                font={fonts.MAIN}
                sizeIcon={width * 0.06}
                security={security}
                onPress={() => setSecurity(!security)}
                value={password}
                onChangeText={setPassword}
                isSvg
                iconOne={<Lock color={color.white} size={SVG_ICON_SIZE} variant='Bold' />}
                iconTwo={security ? <EyeSlash color={color.white} size={SVG_ICON_SIZE} variant='Bold' /> : <Eye color={color.white} size={SVG_ICON_SIZE} variant='Bold' />}
            />
            <Txt
                marginVertical={height * 0.04}
                onPress={() => {
                    console.log('Forgot the password?')
                }}
                size={width * 0.04}
                fontFamily={fonts.MAINB}
                color={color.mainColor}
                center
            >
                {t('Forgot the password?')}
            </Txt>
        </>
    )
}

export default Form