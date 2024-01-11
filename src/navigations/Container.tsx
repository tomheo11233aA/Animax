import { screens } from "@contants/screens";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/navigationRef'
//screens
import Hello from "@screens/Hello";
import Main from "./Main";
import Appearance from "@screens/Appearance";
import UnAuthNavigation from "./UnAuthNavigation";

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.HELLO} component={Hello} />
                <Stack.Screen name={screens.MAIN} component={Main} />
                <Stack.Screen name={screens.APPEARANCE} component={Appearance} />
                <Stack.Screen name={screens.STACK_UNAUTH} component={UnAuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container
