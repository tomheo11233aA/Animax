import React, { useState } from 'react'
import Box from '@common/Box'
import { height } from '@utils/responsive'
import Txt from '@common/Txt'
import { useTranslation } from 'react-i18next'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import Btn from '@common/Btn'
import { useTheme } from '@hooks/redux'
import FAQ from './FAQ'
import ContactUs from './ContactUs'

const Tab = () => {
    const tabs = ['FAQ', 'Contact Us']
    const [tabChoosed, setTabChoosed] = useState<string>('FAQ')
    const { t } = useTranslation()
    const color = useTheme()
    
    return (
        <Box>
            <Box
                marginTop={height * 0.02}
                row
                alignCenter
            >
                {tabs.map((tab) =>
                    <Btn
                        flex={1}
                        key={tab}
                        paddingVertical={7}
                        paddingHorizontal={12}
                        onPress={() => setTabChoosed(tab)}
                        borderColor={tab === tabChoosed ? color.mainColor : colors.gray}
                        borderBottomWidth={tab === tabChoosed ? 3 : 1}
                    >
                        <Txt
                            size={16}
                            marginBottom={height * 0.005}
                            fontFamily={fonts.MAINB}
                            color={tab === tabChoosed ? color.mainColor : colors.gray4}
                        >
                            {t(tab)}
                        </Txt>
                    </Btn>
                )}
            </Box>
            {tabChoosed === 'FAQ' ? <FAQ /> : <ContactUs />}
        </Box>
    )
}

export default React.memo(Tab)