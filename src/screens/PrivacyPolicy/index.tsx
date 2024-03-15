import { View, Text } from 'react-native'
import React from 'react'
import Header2 from '@components/header/Header2'
import Scroll from '@common/Scroll'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { height, width } from '@utils/responsive'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { privacyPolicyData } from '@utils/fakeData'
import { FlashList } from "@shopify/flash-list";
import Box from '@common/Box'

const PrivacyPolicy = () => {
    const { t } = useTranslation()
    const color = useTheme()
    return (
        <KeyBoardSafe>
            <Scroll
                paddingHorizontal={height * 0.03}
            >
                <Header2 title="Privacy Policy" />
                <Box
                    width={'100%'}
                    height={'100%'}
                >
                    <FlashList
                        data={privacyPolicyData}
                        keyExtractor={(item) => item.id.toString()}
                        estimatedItemSize={200}
                        ListHeaderComponent={
                            <>
                                <Box marginTop={height * 0.03} />
                            </>
                        }
                        renderItem={({ item }) => (
                            <Box marginBottom={20}>
                                <Txt size={20} fontFamily={fonts.MAINB} color={color.white}>
                                    {item.id}. {item.title}
                                </Txt>
                                <Txt marginTop={height * 0.01} color={color.white}>
                                    {item.content}
                                </Txt>
                            </Box>
                        )}
                    />
                </Box>
            </Scroll>
        </KeyBoardSafe>
    )
}

export default PrivacyPolicy