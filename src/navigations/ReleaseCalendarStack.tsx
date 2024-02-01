import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ReleaseCalendar from '@screens/ReleaseCalendar'
import Detail from '@screens/Detail'


const Stack = createNativeStackNavigator()

const ReleaseCalendarStack = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            {/* <Stack.Screen name={screens.RELEASE_CALENDAR} component={ReleaseCalendar} /> */}
            <Stack.Screen name={screens.DETAIL} component={Detail} />
        </Stack.Navigator>
    )
}
export default ReleaseCalendarStack