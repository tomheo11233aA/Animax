import { ImageSourcePropType } from "react-native";

export interface IUSerSlice {
    isLogin: boolean;
    language: ILanguage;
    theme: 'dark' | 'light';
    globalLoading: boolean; 
    myLists: any[];
}

export interface ILanguage {
    title?: string,
    value: string,
    image?: ImageSourcePropType,
}