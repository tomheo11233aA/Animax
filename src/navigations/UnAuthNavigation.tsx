import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import ChooseInterest from '@screens/Register/ChooseInterest'

const Stack = createNativeStackNavigator()
const UnAuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.CHOOSE_INTEREST} component={ChooseInterest} />
        </Stack.Navigator>
    )
}
export default UnAuthNavigation
