import React from 'react'
import Box from '@common/Box'
import Img from '@common/Img'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { fonts } from '@themes/fonts'
import * as ImagePicker from 'react-native-image-picker';
import { ActivityIndicator } from 'react-native';
import { colors } from '@themes/colors';
import { height, width } from '@utils/responsive'
import { Edit } from 'iconsax-react-native'

const Info = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const handleChoosePhoto = () => {
        setLoading(true);
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                setLoading(false);
                if (response.didCancel) {
                } else if (response.errorCode) {
                } else {
                    const source = { uri: response?.assets?.[0]?.uri ?? 'Anh bi null' };
                    setSelectedImage(source.uri);
                }
            },
        );
    }
    return (
        <>
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={colors.mainColor}
                />
            ) :
                <Box alignCenter marginVertical={height * 0.02} row>
                    <Box
                        row
                        alignCenter
                    >
                        <Img
                            source={selectedImage ? { uri: selectedImage } : require('@images/unAuth/user.png')}
                            width={width * 0.25}
                            height={width * 0.25}
                            radius={width}
                        />
                        <Btn onPress={handleChoosePhoto} absolute bottom={0} right={-width * 0.03}>
                            <Edit
                                size={width * 0.08}
                                color={colors.mainColor}
                                variant='Bold'
                            />
                        </Btn>
                    </Box>
                    <Box
                        flex={1}
                        marginLeft={width * 0.05}
                    >
                        <Txt
                            size={24}
                            fontFamily={fonts.MAINB}
                        >
                            Văn Nam Phúc
                        </Txt>
                        <Txt
                            size={16}
                        >
                            phucnamvan@gmail.com
                        </Txt>
                    </Box>
                </Box>}
        </>
    )
}

export default React.memo(Info)