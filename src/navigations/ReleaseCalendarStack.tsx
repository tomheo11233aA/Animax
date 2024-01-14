import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ReleaseCalendar from '@screens/ReleaseCalendar'

const Stack = createNativeStackNavigator()
const ReleaseCalendarStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.RELEASE_CALENDAR} component={ReleaseCalendar} />
        </Stack.Navigator>
    )
}
export default ReleaseCalendarStack