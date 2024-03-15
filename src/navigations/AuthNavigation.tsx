import { screens } from '@contants/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Box from '@common/Box'
import Icon from '@common/Icon'
import { colors } from '@themes/colors'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
//screens
import HomeStack from './HomeStack'
import DownloadStack from './DownloadStack'
import MyListStack from './MyListStack'
import ProfileStack from './ProfileStack'
import ReleaseCalendarStack from './ReleaseCalendarStack'
import ForgotPassword from '@screens/AccountSetup/FogotPassword'
import { useTheme } from '@hooks/redux'
import { Home2, Calendar, Profile, Archive, DirectboxReceive } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'
import MediaPlayer from '@screens/MediaPlayer'

const Tab = createBottomTabNavigator()
const AuthNavigation = () => {
    const color = useTheme()
    const { t } = useTranslation()
    const formatTitle = (name: string): string => {
        if (name.length > 15) {
            return name.slice(0, 15) + '...'
        }
        return name
    }
    const tabs = [
        {
            title: 'Home',
            component: HomeStack,
            name: screens.HOME_STACK,
            iconNotFocused: <Home2 color={color.white} />,
            iconFocused: <Home2 variant='Bold' color={colors.mainColor} />
        },
        {
            title: 'Calendar',
            component: ReleaseCalendarStack,
            name: screens.RELEASE_CALENDAR_STACK,
            iconNotFocused: <Calendar color={color.white} />,
            iconFocused: <Calendar variant='Bold' color={colors.mainColor} />
        },
        {
            title: 'My List',
            component: MyListStack,
            name: screens.MY_LIST_STACK,
            iconNotFocused: <Archive color={color.white} />,
            iconFocused: <Archive variant='Bold' color={colors.mainColor} />
        },
        {
            title: 'Download',
            component: DownloadStack,
            // component: MediaPlayer,
            name: screens.DOWNLOAD_STACK,
            iconNotFocused: <DirectboxReceive color={color.white} />,
            iconFocused: <DirectboxReceive variant='Bold' color={colors.mainColor} />
        },
        {
            title: 'Profile',
            component: ProfileStack,
            name: screens.PROFILE_STACK,
            iconNotFocused: <Profile color={color.white} size={SVG_ICON_SIZE} />,
            iconFocused: <Profile variant='Bold' color={colors.mainColor} />
        },
    ]
    // log focused tab
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: BOTTOM_TAB_HEIGHT,
                    paddingTop: 10,
                    backgroundColor: color.bg,
                    position: 'absolute',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderTopWidth: 0,

                }
            }}
        >
            {tabs.map((item, index) => {
                return (
                    <Tab.Screen
                        key={item.title}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Box
                                    justifyCenter
                                    alignCenter
                                >
                                    {focused ? item.iconFocused : item.iconNotFocused}
                                    <Txt
                                        center
                                        size={12}
                                        color={focused ? color.mainColor : color.black}
                                    >
                                        {t(item.title)}
                                    </Txt>
                                </Box>
                            )
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}
export default AuthNavigation
