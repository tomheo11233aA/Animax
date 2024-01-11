import { screens } from "@contants/screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import Biometric from "@screens/Biometric";


const Stack = createNativeStackNavigator()
const BiometricStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.BIOMETRIC} component={Biometric} />
        </Stack.Navigator>
    )
}

export default BiometricStack
