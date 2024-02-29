import { Platform, SafeAreaView } from 'react-native'
import React from 'react'
import Box from '@common/Box'
import Scroll from '@common/Scroll'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import { useTheme } from '@hooks/redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
interface Props {
    bg?: string,
    styles?: any,
    paddingBottom?: number,
    paddingHorizontal?: number,
    children: JSX.Element | JSX.Element[],
    extraRollHeight?: number,
}

const KeyBoardSafe = ({
    bg,
    styles,
    children,
    paddingBottom,
    paddingHorizontal,
    extraRollHeight = 100,
}: Props) => {
    const theme = useTheme()
    const background = bg ? bg : theme.bg
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={extraRollHeight}
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            style={[{
                flex: 1,
                backgroundColor: background,
            }, styles]}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Box
                    flex={1}
                    // isPaddingAdnroid
                    paddingTop={Platform.OS === 'android' ? 0 : 0}
                >
                    <Scroll
                        flexGrow={1}
                        paddingBottom={paddingBottom || BOTTOM_TAB_HEIGHT / 2}
                        paddingHorizontal={paddingHorizontal}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >
                        {children}
                    </Scroll>
                </Box>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default React.memo(KeyBoardSafe)