import { View, Text } from 'react-native'
import React from 'react'
import { SVG_ICON_SIZE } from '@themes/styled'
import { ArrowLeft } from 'iconsax-react-native'
import Btn from '@common/Btn'
import { goBack } from '@utils/navigationRef'
import { useTheme } from '@hooks/redux'

const Header1 = () => {
    const color = useTheme()
    return (
        <Btn
            onPress={() => {
                goBack()
            }}
            alignSelf={'flex-start'}
            marginTop={20}
        >
            <ArrowLeft
                color={color.black}
                size={SVG_ICON_SIZE}
            />
        </Btn>
    )
}

export default React.memo(Header1)