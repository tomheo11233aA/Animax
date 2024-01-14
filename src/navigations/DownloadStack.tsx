import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Download from '@screens/Download'

const Stack = createNativeStackNavigator()
const DownloadStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.DOWNLOAD} component={Download} />
        </Stack.Navigator>
    )
}
export default DownloadStack