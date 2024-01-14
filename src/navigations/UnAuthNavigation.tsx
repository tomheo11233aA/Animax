import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import ChooseInterest from '@screens/Register/ChooseInterest'
import FillProfile from '@screens/Register/FillProfile'
import Signinsocial from '@screens/Users/Signinsocial'
import Started from '@screens/Users/Started'
import Signup from '@screens/Users/Signup'
import ForgotPassword from '@screens/Register/FogotPassword'
import MediaPlayer from '@screens/MediaPlayer'

const Stack = createNativeStackNavigator()
const UnAuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.STARTED} component={Started} />
            <Stack.Screen name={screens.SIGNINSOCIAL} component={Signinsocial} />
            <Stack.Screen name={screens.SIGNUP} component={Signup} />
            <Stack.Screen name={screens.CHOOSE_INTEREST} component={ChooseInterest} />
            <Stack.Screen name={screens.FILL_PROFILE} component={FillProfile} />
            {/* <Stack.Screen name={screens.FORGOT_PASSWORD} component={ForgotPassword} /> */}
            <Stack.Screen name={screens.MEDIA_PLAYER} component={MediaPlayer} />            
        </Stack.Navigator>
    )
}
export default UnAuthNavigation
