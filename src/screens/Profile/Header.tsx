import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { useTheme } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import Img from '@common/Img'
import { fonts } from '@themes/fonts'
import { MoreCircle } from 'iconsax-react-native'
import Btn from '@common/Btn'
interface Props {
    title: string
    t: any
}

const Header: React.FC<Props> = ({ title, t }) => {
    const themeUser = useAppSelector(themeUserSelector)
    return (
        <Box
            row
            marginTop={25}
            width={'100%'}
            alignCenter
        >
            <Img
                source={require('@images/logo.png')}
                width={40}
                height={80}
            />
            <Txt
                size={25}
                flex={1}
                fontFamily={fonts.MAINB}
                marginLeft={20}
            >
                {title}
            </Txt>
            <Btn>
                <MoreCircle size={25} color={themeUser === 'light' ? 'black' : 'white'} />
            </Btn>
        </Box>
    )
}

export default Header