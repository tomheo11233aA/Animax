import { ImageSourcePropType } from "react-native";

export interface IUSerSlice {
    isLogin: boolean;
    language: ILanguage;
}

export interface ILanguage {
    title: string,
    value: string,
    image: ImageSourcePropType,
}