import React, { useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import Header2 from '@components/header/Header2'
import { Switch } from 'react-native-paper'
import Scroll from '@common/Scroll'
import { width } from '@utils/responsive'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import Btn from '@common/Btn'
import { useAppSelector, useAppDispatch } from '@hooks/redux'
import { AppDispatch } from '@redux/store/store'
import { setGeneralNotification, setSound, setVibration } from '@redux/slice/notificationSettingSlice'
import { isGenaralNotificationSelector, isSoundSelector, isVibrationSelector } from '@redux/selector/notificationSettingSelector'

const NotificationSetting = () => {
    const { t } = useTranslation()
    const dispatch: AppDispatch = useAppDispatch()
    const isGenaralNotification = useAppSelector(isGenaralNotificationSelector)
    const isSound = useAppSelector(isSoundSelector)
    const isVibration = useAppSelector(isVibrationSelector)

    const handleToggleSwitch = (id: number) => {
        switch (id) {
            case 1:
                dispatch(setGeneralNotification(!isGenaralNotification))
                break;
            case 2:
                dispatch(setSound(!isSound))
                break;
            case 3:
                dispatch(setVibration(!isVibration))
                break;
            default:
                break;
        }
    }

    return (
        <KeyBoardSafe>
            <Scroll marginHorizontal={width * 0.05}>
                <Header2 title='Notification' />
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
                                value={item.id === 1 ? isGenaralNotification : item.id === 2 ? isSound : isVibration}
                                onValueChange={() => handleToggleSwitch(item.id)}
                                color={colors.mainColor}
                            />
                        </Btn>
                    ))
                }
            </Scroll>
        </KeyBoardSafe>
    )
}

export default NotificationSetting

const list = [
    {
        id: 1,
        name: 'General Notification',
    },
    {
        id: 2,
        name: 'Sound'
    },
    {
        id: 3,
        name: 'Vibration'
    },
    // {
    //     id: 4,
    //     name: 'Special Offers'
    // },
    // {
    //     id: 5,
    //     name: 'Promo & Discount'
    // },
    // {
    //     id: 6,
    //     name: 'Payments'
    // },
    // {
    //     id: 7,
    //     name: 'Cashback'
    // },
    // {
    //     id: 8,
    //     name: 'App Update'
    // },
    // {
    //     id: 9,
    //     name: 'New Service Available'
    // },
    // {
    //     id: 10,
    //     name: 'New Tips Available'
    // }
]