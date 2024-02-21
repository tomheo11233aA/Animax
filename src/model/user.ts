import { ImageSourcePropType } from "react-native";

export interface IUSerSlice {
    isLogin: boolean;
    language: ILanguage;
    theme: 'dark' | 'light';
}

export interface ILanguage {
    title?: string,
    value: string,
    image?: ImageSourcePropType,
}