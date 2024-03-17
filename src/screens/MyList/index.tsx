import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { useAppSelector } from '@hooks/redux'
import { myListsUserSelector } from '@redux/selector/appSelector'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { colors } from '@themes/colors'
import { height, width } from '@utils/responsive'
import { fonts } from '@themes/fonts'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Empty from './Empty'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
import { themeUserSelector } from '@redux/selector/appSelector'
import HeaderLogo from '@components/header/HeaderLogo'
import Item from './Item'

const MyList = () => {
  const { t } = useTranslation()
  const color = useTheme()
  const myLists = useAppSelector(myListsUserSelector)
  const themeUser = useAppSelector(themeUserSelector)
  return (
    <KeyBoardSafe>

      <Scroll
        paddingHorizontal={width * 0.03}
      >
        <HeaderLogo title='My List' type='search' />
        {myLists.length === 0 ? (
          <Empty
            themeUser={themeUser}
            color={color}
            t={t}
          />
        ) : (
          <Box width={'100%'} height={'100%'} padding={10}>
            <FlashList
              contentContainerStyle={{ paddingBottom: height * 0.2, paddingTop: 10}}
              data={myLists}
              renderItem={({ item }) => (
                <Item
                  item={item}
                />
              )}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              estimatedItemSize={200}
              extraData={myLists}
            />
          </Box>
        )}
      </Scroll>
    </KeyBoardSafe>
  )
}

export default MyList

const styles = StyleSheet.create({})