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

const LIGHT = 'Light Mode'
const DARK = 'Dark Mode'

const themes = [LIGHT, DARK]
const Appearance = () => {
  const color = useTheme()
  const { t } = useTranslation()
  const theme = useSelector(themeUserSelector)
  const dispatch: AppDispatch = useAppDispatch()

  const handleChangeTheme = async (value: string) => {
    const payload = value === LIGHT ? 'light' : 'dark'
    localStorage.set(keys.THEME, payload)
    dispatch(setTheme(payload))
  }

  return (
    <KeyBoardSafe>
      <Box padding={15}>
        <Txt
          size={18}
          fontFamily={fonts.AS}
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
      <Txt size={12} fontFamily={fonts.SGM} color={color.black}>
        {t(item)}
      </Txt>
      {THEME === item &&
        <Txt size={14} bold color={colors.yellow}>✓</Txt>
      }
    </Btn>
  )
}

export default Appearance