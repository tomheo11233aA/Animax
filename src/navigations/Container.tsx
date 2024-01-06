import { screens } from "@contants/sceens";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/navigationRef'
//screens
import Hello from "@screens/Hello";
import Started from "../components/users/screens/Started";

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={screens.STARTED}
            >
                <Stack.Screen name={screens.HELLO} component={Hello} />
                <Stack.Screen name={screens.STARTED} component={Started} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container
