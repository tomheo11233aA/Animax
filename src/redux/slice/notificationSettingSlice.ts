import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface INotificationSettingSlice {
    isGenaralNotification: boolean;
    isSound: boolean;
    isVibration: boolean;
    isWifiOnly: boolean;
}

const initialState: INotificationSettingSlice = {
    isGenaralNotification: false,
    isSound: false,
    isVibration: false,
    isWifiOnly: false,
};

const notificationSettingSlice = createSlice({
    name: "notificationSetting",
    initialState,
    reducers: {
        setGeneralNotification: (state, action: PayloadAction<boolean>) => {
            state.isGenaralNotification = action.payload;
        },
        setSound: (state, action: PayloadAction<boolean>) => {
            state.isSound = action.payload;
        },
        setVibration: (state, action: PayloadAction<boolean>) => {
            state.isVibration = action.payload;
        },
        setWifiOnly: (state, action: PayloadAction<boolean>) => {
            state.isWifiOnly = action.payload;
        }
    },
});

export const {
    setGeneralNotification,
    setSound,
    setVibration,
    setWifiOnly
} = notificationSettingSlice.actions;

export default notificationSettingSlice