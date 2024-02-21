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
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'

interface Props {
    title: string
    t: any
}

const Header: React.FC<Props> = ({ title, t }) => {
    const theme = useTheme()
    const themeUser = useAppSelector(themeUserSelector)
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
                    <IonIcon name="arrow-back-outline" size={20} color={themeUser === 'dark' ? 'white' : 'black'} />
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
                {/* <Icon
                    source={require('@images/home/search.png')}
                    size={20}
                /> */}
                <AntDesign name="search1" size={20}
                    color={themeUser === 'dark' ? 'white' : 'black'}
                />
            </Btn>
        </Box>
    )
}

export default Header