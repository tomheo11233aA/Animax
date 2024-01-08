import { screens } from "@contants/screens";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/navigationRef'
//screens
import Hello from "@screens/Hello";
import Started from "@screens/Users/Started";
import Signup from "@screens/Users/Signup";
import Main from "./Main";

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.HELLO} component={Hello} />
                <Stack.Screen name={screens.MAIN} component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container
