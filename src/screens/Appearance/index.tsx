import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useTheme } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'
import { localStorage } from '@utils/localStorage'
import { keys } from '@contants/keys'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { useAppDispatch } from '@hooks/redux'
import { AppDispatch } from '@redux/store/store'
import { setTheme } from '@redux/slice/userSlice'
import LottieView from 'lottie-react-native'
import { Modal, Portal } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const LIGHT = 'Light Mode'
const DARK = 'Dark Mode'

const themes = [LIGHT, DARK]
const Appearance = () => {
  const color = useTheme()
  const { t } = useTranslation()
  const theme = useSelector(themeUserSelector)
  const dispatch: AppDispatch = useAppDispatch()
  const [fakeLoading, setFakeLoading] = React.useState(false)

  const handleChangeTheme = async (value: string) => {
    setFakeLoading(true)
    setTimeout(() => {
      const payload = value === LIGHT ? 'light' : 'dark'
      dispatch(setTheme(payload))
      setFakeLoading(false)
    }, 3000)
  }

  return (
    <KeyBoardSafe>
      <Box padding={15}>
        <Txt
          size={18}
          fontFamily={fonts.MAINB}
          marginTop={18}
          marginBottom={20}
          color={color.black}
        >
          {t('Appearance')}
        </Txt>
        {themes.map(item =>
          <Item
            t={t}
            key={item}
            item={item}
            theme={theme}
            color={color}
            onChangeTheme={handleChangeTheme}
          />
        )}
        <Portal>
          <Modal
            visible={fakeLoading}
            dismissable={false}
            contentContainerStyle={{
              backgroundColor: color.white,
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
              height: '30%',
              borderRadius: 10,
            }}
          >
            <LottieView
              source={require('@lotties/loading_2.json')}
              autoPlay
              loop
              style={{ width: wp("50%"), height: hp("20%"), position: 'absolute', top: 0, alignSelf: 'center' }}
            />
            <Txt
              size={18}
              fontFamily={fonts.MAINB}
              color={theme === 'light' ? 'white' : 'black'}
              absolute
              style={{
                bottom: hp("10%"),
              }}
              width={wp("60%")}
              center
            >
              {t('Please wait...')}
            </Txt>
            <Txt
              size={16}
              fontFamily={fonts.MAIN}
              color={theme === 'light' ? 'white' : 'black'}
              absolute
              style={{
                bottom: 0,
                marginBottom: 20,
              }}
              width={wp("60%")}
              center
            >
              {t('Application theme will be changing in a few seconds...')}
            </Txt>
          </Modal>
        </Portal>
      </Box>
    </KeyBoardSafe>
  )
}

interface IItem {
  t: any;
  item: string;
  theme: string;
  color: any;
  onChangeTheme: (value: string) => Promise<void>;
}

const Item = ({
  t,
  item,
  theme,
  color,
  onChangeTheme,
}: IItem) => {
  const THEME = theme === 'light' ? LIGHT : DARK

  return (
    <Btn
      row
      marginVertical={18}
      justifySpaceBetween
      onPress={() => onChangeTheme(item)}
    >
      <Txt size={16} fontFamily={fonts.MAIN} color={color.black}>
        {t(item)}
      </Txt>
      {THEME === item &&
        <Txt size={18} bold color={colors.yellow}>✓</Txt>
      }
    </Btn>
  )
}

export default Appearance