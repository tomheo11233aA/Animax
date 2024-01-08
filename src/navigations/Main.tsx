import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { isLoginUserSelector } from "@redux/selector/appSelector";
import React, { useEffect } from "react";
import AuthNavigation from "./AuthNavigation";
import UnAuthNavigation from "./UnAuthNavigation";
import { localStorage } from "@utils/localStorage";
import { setLogin } from "@redux/slice/userSlice";
import { AppDispatch } from "@redux/store/store";
import Box from "@common/Box";

interface BoxProps {
    flex?: number;
    alignCenter?: boolean;
    justifyCenter?: boolean;
    backgroundColor?: string;
    children?: React.ReactNode;
}

const Main = () => {
    const dispatch: AppDispatch = useAppDispatch()
    const isLogin = useAppSelector(isLoginUserSelector)
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
        <Box
            flex={1}
        >
            {isLogin ? <AuthNavigation /> : <UnAuthNavigation />}
        </Box>
    );
}

export default Main;