import React from 'react'
import Box from '@common/Box'
import Img from '@common/Img'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { fonts } from '@themes/fonts'
import * as ImagePicker from 'react-native-image-picker';
import { ActivityIndicator } from 'react-native';
import { colors } from '@themes/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
                <Box row alignCenter>
                    <Box
                        row
                        alignCenter
                    >
                        <Img
                            source={selectedImage ? { uri: selectedImage } : require('@images/unAuth/user.png')}
                            width={80}
                            height={80}
                            radius={50}
                        />
                        <Btn onPress={handleChoosePhoto}>
                            <Img
                                source={require('@images/unAuth/edit.png')}
                                absolute
                                top={10}
                            />
                        </Btn>
                    </Box>
                    <Box
                        flex={1}
                        marginLeft={20}
                    >
                        <Txt
                            size={16}
                            fontFamily={fonts.MAINB}
                        >
                            Andrew Ainsley
                        </Txt>
                        <Txt
                        >
                            andrew_ainsley@yourdomain.com
                        </Txt>
                    </Box>
                </Box>}
        </>
    )
}

export default Info