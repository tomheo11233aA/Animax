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
