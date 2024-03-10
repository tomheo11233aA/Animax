import React from 'react'
import { useAppDispatch } from '@hooks/redux'
import { setLogin } from '@redux/slice/userSlice'
import { AppDispatch } from '@redux/store/store'
import { TouchableOpacity } from 'react-native'
import Box from '@common/Box'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { navigate } from '@utils/navigationRef'
import Img from '@common/Img'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import Btn from '@common/Btn'
import { useTheme } from '@hooks/redux'
import Header from './Header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { fonts } from '@themes/fonts'
import Info from './Info'
import { colors } from '@themes/colors'
import { Crown, ArrowRight2 } from 'iconsax-react-native'
import Premium from './Premium'
import List from './List'
import Scroll from '@common/Scroll'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'

const Profile = () => {
  const color = useTheme()
  const { t } = useTranslation()
  const dispatch: AppDispatch = useAppDispatch()
  return (
    <>
      <Box paddingHorizontal={20} backgroundColor={color.bg}>
        <Header t={t} title="Profile" />
      </Box>
      <KeyBoardSafe>
        <Scroll
          paddingHorizontal={20}
          flex={1}
          marginBottom={BOTTOM_TAB_HEIGHT}
        >
          <Info />
          <Premium t={t} color={color} />
          <List t={t} />
        </Scroll>
      </KeyBoardSafe >
    </>
  )
}

export default Profile
