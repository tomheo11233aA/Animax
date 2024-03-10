import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { useTheme } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import Img from '@common/Img'
import { fonts } from '@themes/fonts'
import { MoreCircle } from 'iconsax-react-native'
interface Props {
    title: string
    t: any
}

const Header: React.FC<Props> = ({ title, t }) => {
    const color = useTheme()
    const themeUser = useAppSelector(themeUserSelector)
    return (
        <Box
            row
            marginTop={25}
            width={'100%'}
            alignCenter
            flex={1}
        >
            <Img
                source={require('@images/logo.png')}
                width={80}
                height={80}
            />
            <Txt
                size={25}
                flex={1}
                fontFamily={fonts.MAINB}
            >
                {title}
            </Txt>
            <Box
                marginRight={20}
            >
                <MoreCircle size={25} color={themeUser === 'light' ? 'black' : 'white'} />
            </Box>
        </Box>
    )
}

export default Header