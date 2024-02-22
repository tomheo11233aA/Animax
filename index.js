/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store, { persistor } from '@redux/store/store';
import { Provider } from 'react-redux';
import i18n from './src/language/i18n'
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FIREBASE_WEB_CLIENT_ID, FACEBOOK_APP_ID } from '@env';
import { Settings } from 'react-native-fbsdk-next';

GoogleSignin.configure({
    webClientId: FIREBASE_WEB_CLIENT_ID,
});
Settings.setAppID(FACEBOOK_APP_ID);

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => Root);
