import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Profile from '@screens/Profile'

const Stack = createNativeStackNavigator()
const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.PROFILE} component={Profile} />
        </Stack.Navigator>
    )
}
export default ProfileStack