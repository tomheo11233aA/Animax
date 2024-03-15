import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import ChooseInterest from '@screens/AccountSetup/ChooseInterest'
import Signinsocial from '@screens/HowToLogin/HowToLogin'
import Started from '@screens/Users/Started'
import ForgotPassword from '@screens/AccountSetup/FogotPassword'
import MediaPlayer from '@screens/MediaPlayer'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useTheme } from '@hooks/redux'
import { useAppSelector } from '@hooks/redux'
import SignUp from '@screens/SignUp'
import FillProfile from '@screens/FillProfile'
import SignIn from '@screens/SignIn'
import HowToLogin from '@screens/HowToLogin/HowToLogin'

const Stack = createNativeStackNavigator()
const UnAuthNavigation = () => {
    const theme = useAppSelector(themeUserSelector)
    const colorOfTheme = useTheme()
    changeNavigationBarColor(theme === 'light' ? colorOfTheme.bg : colorOfTheme.bg, true, true)
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'ios'
        }}>
            <Stack.Screen name={screens.STARTED} component={Started} />
            <Stack.Screen name={screens.SIGNUP} component={SignUp} />
            <Stack.Screen name={screens.CHOOSE_INTEREST} component={ChooseInterest} />
            <Stack.Screen name={screens.FILL_PROFILE} component={FillProfile} />
            <Stack.Screen name={screens.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen name={screens.MEDIA_PLAYER} component={MediaPlayer} />
            <Stack.Screen name={screens.SIGNIN} component={SignIn} />
            <Stack.Screen name={screens.HOWTOLOGIN} component={HowToLogin} />
        </Stack.Navigator>
    )
}
export default UnAuthNavigation
