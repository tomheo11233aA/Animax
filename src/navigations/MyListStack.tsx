import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyList from '@screens/MyList'

const Stack = createNativeStackNavigator()
const MyListStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.MY_LIST} component={MyList} />
        </Stack.Navigator>
    )
}
export default MyListStack