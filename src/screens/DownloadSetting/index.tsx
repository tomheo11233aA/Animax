import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header2 from '@components/header/Header2'
import { Switch } from 'react-native-paper'
import Txt from '@common/Txt'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
import { useTheme } from '@hooks/redux'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { height, width } from '@utils/responsive'
import { Wifi, DocumentDownload, Video, Trash, ArrowRight2 } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'
import { FlashList } from '@shopify/flash-list'
import Box from '@common/Box'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { useAppSelector, useAppDispatch } from '@hooks/redux'
import { isWifiOnlySelector } from '@redux/selector/notificationSettingSelector'
import { setWifiOnly } from '@redux/slice/notificationSettingSlice'
import { AppDispatch } from '@redux/store/store'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

const DownloadSetting = () => {
    const color = useTheme()
    const { t } = useTranslation()
    const isWifiOnly = useAppSelector(isWifiOnlySelector)
    const dispatch: AppDispatch = useAppDispatch()
    var data = [
        {
            id: 1,
            name: 'Wifi Only',
            icon: <Wifi size={SVG_ICON_SIZE} color={color.white} />,
            onPress: () => dispatch(setWifiOnly(!isWifiOnly))
        },
        {
            id: 2,
            name: 'Download Location',
            icon: <DocumentDownload size={SVG_ICON_SIZE} color={color.white} />,
            onPress: () => navigate(screens.DOWNLOAD_DETAIL)
        },
        {
            id: 3,
            name: 'Download Quality',
            icon: <Video size={SVG_ICON_SIZE} color={color.white} />,
            onPress: () => navigate(screens.DOWNLOAD_DETAIL)
        },
        {
            id: 4,
            name: 'Clear Cache',
            icon: <Trash size={SVG_ICON_SIZE} color={color.white} variant='Broken' />,
            onPress: () => navigate(screens.DOWNLOAD_DETAIL)
        },
        {
            id: 5,
            name: 'Delete All Downloads',
            icon: <Trash size={SVG_ICON_SIZE} color={color.white} variant='Broken' />,
            onPress: () => navigate(screens.DOWNLOAD_DETAIL)
        }
    ]
    const handleToggleSwitch = () => {
        dispatch(setWifiOnly(!isWifiOnly))
    }
    return (
        <KeyBoardSafe>
            <Scroll paddingHorizontal={height * 0.03}>
                <Header2 title={'Download'} />
                {
                    data.map((item) => (
                        <Btn
                            key={item.id}
                            row
                            justifySpaceBetween
                            alignCenter
                            paddingVertical={20}
                            onPress={item.onPress}
                        >
                            <Box>
                                {item.icon}
                            </Box>
                            <Txt
                                flex={1}
                                marginLeft={width * 0.08}
                            >
                                {t(item.name)}
                            </Txt>
                            {
                                item.id === 1
                                    ? <Switch
                                        value={isWifiOnly}
                                        onValueChange={handleToggleSwitch}
                                        color={colors.mainColor}
                                    />
                                    : item.id !== 4 && item.id !== 5 && <ArrowRight2 size={SVG_ICON_SIZE} color={color.white} />
                            }
                        </Btn>
                    ))
                }
            </Scroll>
        </KeyBoardSafe>
    )
}

export default DownloadSetting

