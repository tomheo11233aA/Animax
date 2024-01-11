import React, { useEffect, useState } from 'react';
import { setLogin } from '@redux/slice/userSlice';
import { localStorage } from '@utils/localStorage';
import { useTranslation } from 'react-i18next';
import RNBiometrics from 'react-native-simple-biometrics';
import { useAppDispatch } from '@hooks/redux';
import { AppDispatch } from '@redux/store/store';
import Box from '@common/Box';
import Btn from '@common/Btn';
import Txt from '@common/Txt';
import { StatusBar, Modal } from 'react-native';
import { themeUserSelector } from '@redux/selector/appSelector';
import { useAppSelector } from '@hooks/redux';
import { colors } from '@themes/colors';
import Icon from '@common/Icon';
import { width } from '@utils/responsive';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fonts } from '@themes/fonts';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';

const TRUE = 'true';
const FALSE = 'false';
const DARK = 'dark';
const LIGHT = 'light';
const BIOMETRIC_KEY = 'isUseBiometric';

const Biometric = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useAppDispatch();
  const theme = useAppSelector(themeUserSelector);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUseBiometric, setIsUseBiometric] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const themeConfig = {
    backgroundColor: theme === DARK ? '#1F222A' : '#fff',
    tintColor: theme === LIGHT ? colors.mainColor : colors.white,
    btnBackgroundColor: theme === LIGHT ? colors.lMainColor2 : colors.black3,
    txtColor: theme === LIGHT ? colors.mainColor : colors.white,
  };

  const authenticate = async () => {
    setIsShowModal(true);
    const isUseBiometric = localStorage.getString(BIOMETRIC_KEY);
    if (isUseBiometric === TRUE) {
      setIsUseBiometric(true);
      const canAuthenticate = await RNBiometrics.canAuthenticate();
      if (canAuthenticate) {
        try {
          await RNBiometrics.requestBioAuth(t('Authentication Required'), t('Please authenticate to proceed.'));
          setIsAuthenticated(true);
          dispatch(setLogin(false));
          setIsShowModal(false);
          localStorage.set(BIOMETRIC_KEY, FALSE);
          navigate(screens.STACK_UNAUTH);
        } catch (error) {
          setIsAuthenticated(false);
          dispatch(setLogin(false));
          setIsShowModal(false);
        }
      } else {
        console.log('Biometric authentication is not supported on this device.');
      }
    }
    setIsShowModal(false);
  };

  useEffect(() => {
    authenticate();
  }, []);

  const handleBiometricAuth = async () => {
    authenticate();
  };

  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={themeConfig.backgroundColor}
      />
      <Modal
        visible={isShowModal}
        transparent
        animationType={'fade'}
      >
        <Box
          flex={1}
          alignCenter
          justifyCenter
          backgroundColor={'rgba(0,0,0,0.5)'}
        >
        </Box>
      </Modal>
      <Box
        flex={1}
        alignCenter
        backgroundColor={themeConfig.backgroundColor}
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Icon
          resizeMode={'contain'}
          source={require('@images/logo.png')}
          size={width * 30 / 60}
          tintColor={themeConfig.tintColor}
        />
        <Btn
          marginBottom={wp('4%')}
          width={wp('80%')}
          padding={wp('4%')}
          radius={wp('2%')}
          backgroundColor={themeConfig.btnBackgroundColor}
          onPress={handleBiometricAuth}
        >
          <Txt
            color={themeConfig.txtColor}
            size={14}
            fontFamily={fonts.MAINB}
          >
            {t('Unlock with biometrics')}
          </Txt>
        </Btn>
      </Box>
    </>
  );
};

export default Biometric;