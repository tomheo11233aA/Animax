import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '@screens/Home'
import SeeAll from '@screens/Home/SeeAll'
import Search from '@screens/Search'
import Filter from '@screens/Filter'
import Detail from '@screens/ReleaseCalendar/Detail'

const Stack = createNativeStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'ios'
        }}>
            <Stack.Screen name={screens.HOME} component={Home} />
            <Stack.Screen name={screens.SEARCH} component={Search} />
            <Stack.Screen name={screens.FILTER} component={Filter} />
            <Stack.Screen name={screens.DETAIL} component={Detail} />
        </Stack.Navigator>
    )
}
export default HomeStack