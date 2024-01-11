import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { isLoginUserSelector } from "@redux/selector/appSelector";
import React, { useEffect, useState } from "react";
import AuthNavigation from "./AuthNavigation";
import UnAuthNavigation from "./UnAuthNavigation";
import { localStorage } from "@utils/localStorage";
import { setLogin } from "@redux/slice/userSlice";
import { AppDispatch } from "@redux/store/store";
import Box from "@common/Box";
import { StatusBar } from "react-native";
import { themeUserSelector } from "@redux/selector/appSelector";
import RNBiometrics from 'react-native-simple-biometrics';
import { use } from "i18next";

const Main = () => {
    const dispatch: AppDispatch = useAppDispatch()
    const isLogin = useAppSelector(isLoginUserSelector)
    const theme = useAppSelector(themeUserSelector)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(() => {
    //     const fetchIsLogin = () => {
    //         const isLogin = localStorage.getString('isLogin')
    //         if (isLogin === undefined) {
    //             localStorage.set('isLogin', 'false')
    //             dispatch(setLogin(false))
    //         } else {
    //             dispatch(setLogin(isLogin === 'true' ? true : false))
    //         }
    //     }
    //     fetchIsLogin()
    // }, [])
    useEffect(() => {
        const authenticate = async () => {
            const isUseBiometric = localStorage.getString('isUseBiometric');
            if (isUseBiometric === 'true') {
                const canAuthenticate = await RNBiometrics.canAuthenticate();
                if (canAuthenticate) {
                    try {
                        await RNBiometrics.requestBioAuth('Authentication Required', 'Please authenticate to proceed.');
                        setIsAuthenticated(true);
                        dispatch(setLogin(true));
                    } catch (error) {
                        setIsAuthenticated(false);
                        dispatch(setLogin(false));
                        console.error('Biometric authentication failed', error);
                    }
                } else {
                    console.log('Biometric authentication is not supported on this device.');
                }
            }
        };

        authenticate();
    }, []);
    return (
        <>
            <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={theme === 'dark' ? '#1F222A' : '#fff'}
            />
            <Box
                flex={1}
            >
                {/* {isLogin ? <AuthNavigation /> : <UnAuthNavigation />} */}
                {isAuthenticated ? <AuthNavigation /> : <UnAuthNavigation />}
            </Box>
        </>
    );
}

export default Main;