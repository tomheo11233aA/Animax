import { screens } from "@contants/screens";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/navigationRef'
//screens
import Hello from "@screens/Hello";
import Main from "./Main";
import Appearance from "@screens/Appearance";
import UnAuthNavigation from "./UnAuthNavigation";
import SeeAll from "@screens/Home/SeeAll";
import Premium from "@screens/Premium";
import Payment from "@screens/Payment";
import CreditInput from "@screens/CreditCard";
import EditProfile from "@screens/EditProfile";
import NotificationSetting from "@screens/NotificationSetting";
import Security from "@screens/Security";
import HelpCenter from "@screens/HelpCenter";
import PrivacyPolicy from "@screens/PrivacyPolicy";

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.HELLO} component={Hello} />
                <Stack.Screen name={screens.MAIN} component={Main} />
                <Stack.Screen name={screens.APPEARANCE} component={Appearance} />
                <Stack.Screen name={screens.STACK_UNAUTH} component={UnAuthNavigation} />
                <Stack.Screen name={screens.SEE_ALL} component={SeeAll as any} />
                <Stack.Screen name={screens.PREMIUM} component={Premium} />
                <Stack.Screen name={screens.PAYMENT} component={Payment} />
                <Stack.Screen name={screens.CREDITCARD_INPUT} component={CreditInput} />
                <Stack.Screen name={screens.EDIT_PROFILE} component={EditProfile} />
                <Stack.Screen name={screens.NOTIFICATION} component={NotificationSetting}/>
                <Stack.Screen name={screens.SECURITY} component={Security}/>
                <Stack.Screen name={screens.HELPCENTER} component={HelpCenter}/>
                <Stack.Screen name={screens.PRIVACY_POLICY} component={PrivacyPolicy}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container
