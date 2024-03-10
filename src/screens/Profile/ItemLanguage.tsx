import React, { useState, useEffect } from 'react'
import { ImageSourcePropType, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { useAppDispatch } from '@hooks/redux'
import { setLanguage, setLogin } from '@redux/slice/userSlice'
import { screens } from '@contants/screens'
import { navigate } from '@utils/navigationRef'
import { localStorage } from '@utils/localStorage'
import { Profile, Notification, DocumentDownload, Security, Eye, Logout, Warning2, LanguageSquare } from 'iconsax-react-native'
import Item from './Item'
import { useTheme } from '@hooks/redux'
import { languageUserSelector, themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import { setTheme } from '@redux/slice/userSlice'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { keys } from '@contants/keys'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { AppDispatch } from '@redux/store/store'
import LottieView from 'lottie-react-native'
import { Modal, Portal } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { convertLanguage } from '@utils/convert'
import Img from '@common/Img'

interface Props {
    t: any;
    handleChangeLanguage: (lng: string) => void,
    lng: any,
    i18n: any
}

const ItemLanguage = ({ t, handleChangeLanguage, lng, i18n }: Props) => {
    return (
        <Btn width={'100%'} onPress={() => handleChangeLanguage(lng)}>
            <Box
                row
                key={lng}
                paddingVertical={15}
                alignSelf={'flex-start'}
                width={'100%'}
                borderBottomWidth={1}
                borderColor={colors.gray4}
            >
                <Box row alignCenter marginLeft={20}>
                    <Img
                        source={convertLanguage(lng).image}
                        width={30}
                        height={30}
                    />
                    {
                        lng === i18n.language ?

                            <Box row alignCenter justifySpaceBetween width={'85%'}>
                                <Txt marginLeft={20} size={16} fontFamily={fonts.MAINB} color={'black'}>{t(convertLanguage(lng).title)}</Txt>

                                <Txt size={16} color={colors.yellow} center>✓</Txt>

                            </Box>
                            :
                            <Txt marginLeft={20} size={16} fontFamily={fonts.MAINB} color={'black'}>{t(convertLanguage(lng).title)}</Txt>
                    }
                </Box>
            </Box>
        </Btn>
    )
}

export default React.memo(ItemLanguage)