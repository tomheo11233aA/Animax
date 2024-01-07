import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { isLoginUserSelector } from "@redux/selector/appSelector";
import React, { useEffect } from "react";
import AuthNavigation from "./AuthNavigation";
import UnAuthNavigation from "./UnAuthNavigation";
import { localStorage } from "@utils/localStorage";
import { setLogin } from "@redux/slice/userSlice";
import { AppDispatch } from "@redux/store/store";

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
        <>
            {isLogin ? <AuthNavigation /> : <UnAuthNavigation />}
            {/* {isLogin ? <AuthNavigation /> : <AuthNavigation />} */}

        </>
    );
}

export default Main;