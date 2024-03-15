import React, { useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import Header2 from '@components/header/Header2'
import { Switch } from 'react-native-paper'
import Scroll from '@common/Scroll'
import { height, width } from '@utils/responsive'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import Btn100 from '@components/button/Btn100'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import { ArrowRight2 } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'
import { useTheme } from '@hooks/redux'
import { colors } from '@themes/colors'

const Security = () => {
    const { t } = useTranslation()
    const [switchStates, setSwitchStates] = useState<{ [key: number]: boolean }>(
        list.reduce((acc: { [key: number]: boolean }, item) => {
            acc[item.id] = false;
            return acc;
        }, {}));

    const handleToggleSwitch = (id: number) => {
        setSwitchStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const theme = useAppSelector(themeUserSelector)
    const color = useTheme()
    return (
        <KeyBoardSafe>
            <Scroll marginHorizontal={width * 0.05}>
                <Header2 title='Security' />
                <Txt size={20} fontFamily={fonts.MAINB} marginTop={height * 0.03}>
                    Control
                </Txt>
                {
                    controlSetting.map((item) => (
                        <Btn
                            key={item.id}
                            row
                            justifySpaceBetween
                            alignCenter
                            paddingVertical={20}
                            onPress={() => handleToggleSwitch(item.id)}
                        >
                            <Txt
                                size={16}
                                fontFamily={fonts.MAINB}
                            >
                                {t(item.name)}
                            </Txt>
                            <ArrowRight2
                                color={color.white}
                                size={SVG_ICON_SIZE}
                            />
                        </Btn>
                    ))
                }

                <Txt size={20} fontFamily={fonts.MAINB} marginTop={height * 0.03}>
                    Settings
                </Txt>
                {
                    list.map((item) => (
                        <Btn
                            key={item.id}
                            row
                            justifySpaceBetween
                            alignCenter
                            paddingVertical={20}
                            onPress={() => handleToggleSwitch(item.id)}
                        >
                            <Txt
                                size={16}
                                fontFamily={fonts.MAINB}
                            >
                                {t(item.name)}
                            </Txt>
                            <Switch
                                value={switchStates[item.id]}
                                onValueChange={() => handleToggleSwitch(item.id)}
                                color={color.mainColor}
                            />
                        </Btn>
                    ))
                }
                <Btn100
                    title='Change PIN'
                    onPress={() => { }}
                    marginTop={height * 0.02}
                    backgroundColor={theme === 'dark' ? colors.gray2 : color.mainColor}
                />
                <Btn100
                    title='Change Password'
                    onPress={() => { }}
                    backgroundColor={theme === 'dark' ? colors.gray2 : color.mainColor}
                    marginTop={height * 0.03}
                />
            </Scroll>
        </KeyBoardSafe>
    )
}

export default Security

const list = [
    {
        id: 1,
        name: 'Remember me',
    },
    {
        id: 2,
        name: 'Biometric Identification'
    },
    {
        id: 3,
        name: '2FA Authentication'
    },
]

const controlSetting = [
    {
        id: 1,
        name: 'Security Alert'
    },
    {
        id: 2,
        name: 'Manage Devices'
    },
    {
        id: 3,
        name: 'Manage Permission'
    }
]