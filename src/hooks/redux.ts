import { AppDispatch, RootState } from "@redux/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { themeUserSelector } from "@redux/selector/appSelector";
import { colors } from "@themes/colors";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useTheme = () => {
    const THEME = colors[useAppSelector(themeUserSelector)]
    return THEME
}