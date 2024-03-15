import React from 'react'
import { goBack, navigate } from '@utils/navigationRef';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { screens } from '@contants/screens';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import Box from '@common/Box';
import Btn from '@common/Btn';
import Icon from '@common/Icon';
import Input from '@common/Input';
import { ArrowLeft, SearchNormal, SearchNormal1 } from 'iconsax-react-native';
import { SVG_ICON_SIZE } from '@themes/styled';

interface Props {
    setSearch: (search: string) => void,
    theme: string,
    color: any
}

const Header: React.FC<Props> = ({
    setSearch,
    theme,
    color
}) => {
    return (
        <Box
            row={true}
            padding={10}
            justifySpaceBetween={true}
            alignCenter
        >
            <Btn
                onPress={() => goBack()}>
                {/* <Icon
                    source={require('@images/unAuth/back.png')}
                    tintColor={theme === 'light' ? color.black : 'white'}
                    size={20}
                /> */}
                <ArrowLeft color={color.white} size={20} />
            </Btn>
            <Input
                onChangeText={setSearch}
                backgroundColor={color.black3}
                radius={wp('4%')}
                height={hp(7)}
                width={'70%'}
                borderWidth={1}
                hint={'Eg. Naruto'}
                font={fonts.MAIN}
                hintColor={'#888888'}
                color={color.white}
                isSvg
                iconOne={<SearchNormal1 color={color.mainColor} size={SVG_ICON_SIZE} />}
            />
            <Btn
                backgroundColor={color.lMainColor}
                radius={wp('5%')}
                style={{
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 15
                }}
                onPress={() => { navigate(screens.FILTER) }}
            >
                <Icon
                    source={require('@images/home/filter.png')}
                    size={18}
                    tintColor={colors.mainColor}
                />
            </Btn>
        </Box>
    )
}

export default Header
