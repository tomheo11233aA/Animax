import { RootState } from "@redux/store/store";

export const isGenaralNotificationSelector = (state: RootState) => state.notificationSetting.isGenaralNotification;

export const isSoundSelector = (state: RootState) => state.notificationSetting.isSound;

export const isVibrationSelector = (state: RootState) => state.notificationSetting.isVibration;
