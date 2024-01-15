import { screens } from '@contants/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Box from '@common/Box'
import Icon from '@common/Icon'
import { colors } from '@themes/colors'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
//screens
import HomeStack from './HomeStack'
import DownloadStack from './DownloadStack'
import MyListStack from './MyListStack'
import ProfileStack from './ProfileStack'
import ReleaseCalendarStack from './ReleaseCalendarStack'

const Tab = createBottomTabNavigator()
const AuthNavigation = () => {
    changeNavigationBarColor('transparent', true, true)
    const { t } = useTranslation()
    const formatTitle = (name: string): string => {
        if (name.length > 15) {
            return name.slice(0, 15) + '...'
        }
        return name
    }
    const tabs = [
        {
            sizeIcon: 18,
            title: 'Home',
            component: HomeStack,
            name: screens.HOME_STACK,
            icon: require('@images/auth/home.png'),
            icon2: require('@images/auth/home2.png'),
        },
        {
            sizeIcon: 18,
            title: 'Release Calendar',
            component: ReleaseCalendarStack,
            name: screens.RELEASE_CALENDAR_STACK,
            icon: require('@images/auth/calendar.png'),
            icon2: require('@images/auth/calendar2.png'),
        },
        {
            sizeIcon: 18,
            title: 'My List',
            component: MyListStack,
            name: screens.MY_LIST_STACK,
            icon: require('@images/auth/mark.png'),
            icon2: require('@images/auth/mark2.png'),
        },
        {
            sizeIcon: 18,
            title: 'Download',
            component: DownloadStack,
            name: screens.DOWNLOAD_STACK,
            icon: require('@images/auth/download.png'),
            icon2: require('@images/auth/download2.png'),
        },
        {
            sizeIcon: 18,
            title: 'Profile',
            component: ProfileStack,
            name: screens.PROFILE_STACK,
            icon: require('@images/auth/profile.png'),
            icon2: require('@images/auth/profile2.png'),
        },
    ]
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: hp('12%'),
                    paddingTop: 10,
                    borderTopWidth: 1,
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }
            }}
        >
            {tabs.map((tab) => {
                return (
                    <Tab.Screen
                        key={tab.title}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => {
                                return (
                                    <Box alignCenter>
                                        <Icon
                                            tintColor={focused ? colors.mainColor : 'gray'}
                                            marginBottom={5}
                                            size={tab.sizeIcon}
                                            source={focused ? tab.icon2 : tab.icon}
                                            resizeMode={'contain'}
                                        />
                                        <Txt
                                            size={12}
                                            numberOfLines={1}
                                            color={focused ? colors.mainColor : 'black'}
                                        >
                                            {formatTitle(t(tab.title))}
                                        </Txt>
                                    </Box>
                                )
                            }
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}
export default AuthNavigation
