import React, { useState, useEffect } from 'react'
import { ImageSourcePropType } from 'react-native'
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
import { Modal, Portal } from 'react-native-paper'
import { convertLanguage } from '@utils/convert'
import ModalLoading from './ModalLoading'
import ItemLanguage from './ItemLanguage'
import { keys } from '@contants/keys'
import { AppDispatch } from '@redux/store/store'

export interface IOption {
    title: string;
    icon: React.ReactElement<ImageSourcePropType>;
    selectedLanguage?: string;
    onClick?: () => void;
}

interface Props {
    t: any;
}

const List = ({ t }: Props) => {
    const dispatch: AppDispatch = useAppDispatch()
    const themeColor = useTheme()
    const theme = useAppSelector(themeUserSelector)
    const language = useAppSelector(languageUserSelector)
    const { i18n } = useTranslation()
    const [fakeLoading, setFakeLoading] = useState(false)
    const [isOpenChangeLanguage, setIsOpenChangeLanguage] = useState(false)
    const showModalChangeLanguage = () => setIsOpenChangeLanguage(true)
    const hideModalChangeLanguage = () => setIsOpenChangeLanguage(false)
    const languageOptions = ['en', 'vn']
    const handleChangeTheme = async (value: string) => {
        setFakeLoading(true)
        setTimeout(() => {
            const payload = value === 'light' ? 'light' : 'dark'
            dispatch(setTheme(payload))
            setFakeLoading(false)
        }, 1500)
    }
    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.set(keys.LANGUAGE, lng)
        const lngObject = convertLanguage(lng)
        dispatch(setLanguage(lngObject))
        hideModalChangeLanguage()
    }
    const data: IOption[] = [
        {
            title: 'Edit Profile',
            icon: <Profile size={24} color={themeColor.black} />,
            onClick: () => navigate(screens.EDIT_PROFILE)
        },
        {
            title: 'Notification',
            icon: <Notification size={24} color={themeColor.black} />,
            onClick: () => navigate(screens.NOTIFICATION)
        },
        {
            title: 'Download & Storage',
            icon: <DocumentDownload size={24} color={themeColor.black} />,
            onClick: () => navigate(screens.DOWNLOAD_DETAIL)
        },
        {
            title: 'Security',
            icon: <Security size={24} color={themeColor.black} />,
            onClick: () => navigate(screens.SECURITY)
        },
        {
            title: 'Language & Region',
            icon: <LanguageSquare size={24} color={themeColor.black} />,
            selectedLanguage: language.title,
            onClick: () => showModalChangeLanguage()
        },
        {
            title: 'Dark Mode',
            icon: <Eye size={24} color={themeColor.black} />,
            onClick: () => handleChangeTheme(theme === 'light' ? 'dark' : 'light')
        },
        {
            title: 'Help Center',
            icon: <Warning2 size={24} color={themeColor.black} />,
            onClick: () => navigate(screens.HELPCENTER)
        },
        {
            title: 'Privacy Policy',
            icon: <Warning2 size={24} color={themeColor.black} />,
            onClick: () => navigate(screens.PRIVACY_POLICY)
        },
        {
            title: 'Logout',
            icon: <Logout size={24} color={'red'} />,
            onClick: () => {
                dispatch(setLogin(false))
                localStorage.clearAll()
            }
        }
    ]
    return (
        <Animated.View
            style={{
                marginTop: 10,
                borderRadius: 5,
                backgroundColor: themeColor.bg,
            }}
        >
            <Portal>
                <Modal
                    visible={fakeLoading}
                    dismissable={false}
                    contentContainerStyle={{
                        backgroundColor: themeColor.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        alignSelf: 'center',
                        height: '30%',
                        borderRadius: 10,
                    }}
                >
                    <ModalLoading t={t} theme={theme} />
                </Modal>
            </Portal>
            <Portal>
                <Modal
                    visible={isOpenChangeLanguage}
                    contentContainerStyle={{
                        backgroundColor: 'white',
                        width: '80%',
                        borderRadius: 10,
                        alignSelf: 'center',
                    }}
                    onDismiss={hideModalChangeLanguage}
                >
                    {languageOptions.map((lng) => {
                        return (
                            <ItemLanguage
                                t={t}
                                handleChangeLanguage={handleChangeLanguage}
                                lng={lng}
                                i18n={i18n}
                                key={lng}
                            />
                        )
                    })}
                </Modal>
            </Portal>
            {data.map((item) =>
                <Item
                    t={t}
                    item={item}
                    key={item.title}
                    onClick={item.onClick}
                />
            )}
        </Animated.View>
    )
}

export default React.memo(List)