import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface INotificationSettingSlice {
    isGenaralNotification: boolean;
    isSound: boolean;
    isVibration: boolean;
}

const initialState: INotificationSettingSlice = {
    isGenaralNotification: false,
    isSound: false,
    isVibration: false,
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
    },
});

export const {
    setGeneralNotification,
    setSound,
    setVibration,
} = notificationSettingSlice.actions;

export default notificationSettingSlice