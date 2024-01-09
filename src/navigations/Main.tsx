import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { isLoginUserSelector } from "@redux/selector/appSelector";
import React, { useEffect } from "react";
import AuthNavigation from "./AuthNavigation";
import UnAuthNavigation from "./UnAuthNavigation";
import { localStorage } from "@utils/localStorage";
import { setLogin } from "@redux/slice/userSlice";
import { AppDispatch } from "@redux/store/store";
import Box from "@common/Box";
import { StatusBarStyle, StatusBar } from "react-native";
import { themeUserSelector } from "@redux/selector/appSelector";

const Main = () => {
    const dispatch: AppDispatch = useAppDispatch()
    const isLogin = useAppSelector(isLoginUserSelector)
    const theme = useAppSelector(themeUserSelector)
    useEffect(() => {
        const fetchIsLogin = () => {
            const isLogin = localStorage.getString('isLogin')
            if (isLogin === undefined) {
                localStorage.set('isLogin', 'false')
                dispatch(setLogin(false))
            } else {
                dispatch(setLogin(isLogin === 'true' ? true : false))
            }
        }
        fetchIsLogin()
    }, [])
    return (
        <>
            <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={theme === 'dark' ? '#1F222A' : '#fff'}
            />
            <Box
                flex={1}
            >
                {isLogin ? <AuthNavigation /> : <UnAuthNavigation />}
            </Box>
        </>
    );
}

export default Main;