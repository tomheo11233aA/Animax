import React from 'react'
import Scroll from '@common/Scroll'
import Txt from '@common/Txt'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { fonts } from '@themes/fonts'
import Box from '@common/Box'
import Img from '@common/Img'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { width, height } from '@utils/responsive'
import Form from './Form'
import Footer from './Footer'
import Header1 from '@components/header/Header1'

const SignUp = () => {
    const { t } = useTranslation()
    const color = useTheme()
    const [security, setSecurity] = React.useState(true)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <KeyBoardSafe>
            <Scroll
                paddingHorizontal={width * 0.05}
                paddingVertical={height * 0.01}
                showsVerticalScrollIndicator={false}
            >
                <Header1 />

                <Img
                    alignSelf={'center'}
                    marginTop={height * 0.04}
                    width={width * 0.3}
                    height={width * 0.3}
                    source={require('@images/logo.png')}
                />

                <Txt
                    marginTop={height * 0.04}
                    center
                    size={width * 0.08}
                    fontFamily={fonts.MAINB}
                >
                    {t('Create Your Account')}
                </Txt>

                <Box marginTop={height * 0.05} />

                <Form
                    t={t}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    security={security}
                    setSecurity={setSecurity}
                    color={color}
                />

                <Box marginTop={height * 0.06} />

                <Footer
                    t={t}
                    color={color}
                />
            </Scroll>
        </KeyBoardSafe>
    )
}

export default SignUp
