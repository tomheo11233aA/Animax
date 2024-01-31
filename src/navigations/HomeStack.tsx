import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '@screens/Home'
import SeeAll from '@screens/Home/SeeAll'

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
            <Stack.Screen name={screens.SEE_ALL} component={SeeAll as any} />
        </Stack.Navigator>
    )
}
export default HomeStack