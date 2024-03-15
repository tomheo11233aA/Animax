import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
import { height, width } from '@utils/responsive'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { Linking } from 'react-native'
import { Whatsapp, Global, Facebook, Instagram, Call } from 'iconsax-react-native'
import { useTheme } from '@hooks/redux'
import { SVG_ICON_SIZE } from '@themes/styled'
import Btn from '@common/Btn'

const ContactUs = () => {
    const color = useTheme()
    return (
        <KeyBoardSafe>
            <Scroll >
                {data.map((item) => {
                    return (
                        <Btn
                            key={item.id}
                            row
                            paddingVertical={20}
                            paddingHorizontal={20}
                            backgroundColor={color.bg2}
                            radius={width * 0.05}
                            marginTop={20}
                            onPress={item.onPress}
                            justifyStart
                        >
                            {item.icon}

                            <Txt
                                size={16}
                                fontFamily={fonts.MAINB}
                                marginLeft={20}
                                color={color.white}
                            >
                                {item.name}
                            </Txt>
                        </Btn>
                    )
                }
                )}
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(ContactUs)

var data = [
    {
        id: 1,
        name: 'What\'s App',
        icon: <Whatsapp color={colors.mainColor} size={SVG_ICON_SIZE} />,
        onPress: () => Linking.openURL('https://wa.me/1234567890')
    },
    {
        id: 2,
        name: 'Website',
        icon: <Global color={colors.mainColor} size={SVG_ICON_SIZE} />,
        onPress: () => Linking.openURL('https://www.google.com')
    },
    {
        id: 3,
        name: 'Facebook',
        icon: <Facebook color={colors.mainColor} size={SVG_ICON_SIZE} variant='Bold' />,
        onPress: () => Linking.openURL('https://www.facebook.com')
    },
    {
        id: 4,
        name: 'Instagram',
        icon: <Instagram color={colors.mainColor} size={SVG_ICON_SIZE} variant='Bold' />,
        onPress: () => Linking.openURL('https://www.instagram.com')
    },
    {
        id: 5,
        name: 'Call',
        icon: <Call color={colors.mainColor} size={SVG_ICON_SIZE} variant='Bold' />,
        onPress: () => Linking.openURL('tel:0123456789')
    }
]