import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import Started from "@screens/Users/Started";
import Signinsocial from "@screens/Users/Signinsocial";

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.STARTED} component={Started} />
        </Stack.Navigator>
    )
}
export default AuthNavigation
