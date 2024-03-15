import React from 'react'
import { fonts } from '@themes/fonts'
import { width, height } from '@utils/responsive'
import Input from '@common/Input'
import { SvgImage } from '@reuse/SvgImage'
import { Lock1, Eye, EyeSlash } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'
import IonIcon from 'react-native-vector-icons/Ionicons'

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
                value={email}
                onChangeText={setEmail}
                isSvg
                iconOne={<IonIcon name='mail' size={SVG_ICON_SIZE} color={color.black} />}
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
                security={security}
                onPress={() => setSecurity(!security)}
                value={password}
                onChangeText={setPassword}
                isSvg
                iconOne={<Lock1 size={SVG_ICON_SIZE} color={color.black} variant='Bold' />}
                iconTwo={security ? <EyeSlash size={SVG_ICON_SIZE} color={color.black} variant='Bold' /> : <Eye size={SVG_ICON_SIZE} color={color.black} variant='Bold' />}
            />
        </>
    )
}

export default Form