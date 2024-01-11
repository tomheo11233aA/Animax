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
import BiometricStack from "./Biomatric";

const Main = () => {
    const dispatch: AppDispatch = useAppDispatch()
    const isLogin = useAppSelector(isLoginUserSelector)
    const theme = useAppSelector(themeUserSelector)
    const [isUseBiometric, setIsUseBiometric] = useState(false);
    useEffect(() => {
        const isUseBiometric = localStorage.getString('isUseBiometric');
        localStorage.set('isUseBiometric', 'true');
        if (isUseBiometric === 'true') {
            setIsUseBiometric(true);
        }
    }, []);
    return (
        <>
            <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={theme === 'dark' ? '#1F222A' : '#fff'}
            />
            <Box
                flex={1}>
                {isUseBiometric ? <BiometricStack /> : isLogin ? <AuthNavigation /> : <UnAuthNavigation />}
            </Box>
        </>
    );
}

export default Main;