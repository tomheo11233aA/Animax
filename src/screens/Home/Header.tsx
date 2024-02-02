import React from 'react'
import { goBack } from '@utils/navigationRef'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Icon from '@common/Icon'
import Btn from '@common/Btn'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useTheme } from '@hooks/redux'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

interface Props {
    title: string
    t: any
}

const Header: React.FC<Props> = ({ title, t }) => {
    const theme = useTheme()
    return (
        <Box
            row
            justifySpaceBetween
            alignCenter
            paddingTop={hp('2%')}
            paddingHorizontal={wp('5%')}
            marginTop={hp('2%')}
        >
            <Box row alignCenter>
                <Btn
                    onPress={() => goBack()}
                    padding={10}
                >
                    <Icon
                        source={require('@images/home/back.png')}
                        size={20}
                    />
                </Btn>
                <Txt
                    color={theme.black}
                    size={20}
                    bold
                    marginLeft={10}>
                    {t(title)}
                </Txt>
            </Box>

            <Btn
                padding={10}
                onPress={() => navigate(screens.SEARCH)}
            >
                <Icon
                    source={require('@images/home/search.png')}
                    size={20}
                />
            </Btn>
        </Box>
    )
}

export default Header