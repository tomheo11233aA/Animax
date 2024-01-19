import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import Slider from '@react-native-community/slider';
import { goBack } from '@utils/navigationRef';

interface Props {
    data: any[];
    currentVideoIndex: number;
    progress: { currentTime: number, seekableDuration: number };
    format: (seconds: number) => string;
    onSliderValueChange: (value: number) => void;
    videoRef: React.RefObject<any>;
    paused: boolean;
    setPaused: (value: boolean) => void;
    handlePictureInPicture: () => void;
    requestAudioFocus: () => void;
    abandonAudioFocus: () => void;
    showSpeedSelector: () => void;
    handleFullScreen: () => void;
}

const SmallScreenMode: React.FC<Props> = ({
    data,
    currentVideoIndex,
    progress,
    format,
    onSliderValueChange,
    videoRef,
    paused,
    setPaused,
    handlePictureInPicture,
    requestAudioFocus,
    abandonAudioFocus,
    showSpeedSelector,
    handleFullScreen,
}) => {
    return (
        <>
            {/* top left control */}
            <TouchableOpacity onPress={() => goBack()}
                style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
                <Image
                    source={require('@images/video/back.png')}
                    style={{ width: 25, height: 25 }} />
            </TouchableOpacity>

            {/* top right control */}
            <View style={{
                position: 'absolute',
                top: 10,
                right: 20,
                zIndex: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={showSpeedSelector}>
                    <Image
                        source={require('@images/video/speed.png')}
                        style={{ width: 18, height: 18 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={showSpeedSelector}
                    style={{
                        marginHorizontal: 18,
                    }}
                >
                    <Image
                        source={require('@images/video/caption.png')}
                        style={{
                            width: 20,
                            height: 20,
                        }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={showSpeedSelector}>
                    <Image
                        source={require('@images/video/menu.png')}
                        style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
            </View>

            {/* Main control */}
            <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    onPress={() => {
                        if (paused) {
                            requestAudioFocus();
                        } else {
                            abandonAudioFocus();
                        }
                        setPaused(!paused);
                    }}
                >
                    <Image
                        source={paused ? require('@images/video/play.png') : require('@images/video/pause.png')}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>

            {/* Bottom control - Slider and button full screen */}
            <View style={{
                width: '100%',
                height: 50,
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,.5)',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    width: '70%'
                }}>
                    <Text style={{
                        color: 'white',
                        fontFamily: fonts.MAIN,
                        fontSize: 14,
                    }}>
                        {format(progress.currentTime)}
                    </Text>
                    <Slider
                        style={{ width: '93%', height: 40 }}
                        minimumValue={0}
                        maximumValue={progress.seekableDuration}
                        minimumTrackTintColor={colors.mainColor}
                        maximumTrackTintColor="#fff"
                        value={progress.currentTime}
                        onValueChange={onSliderValueChange}
                        thumbTintColor='white'
                    />
                    <Text style={{
                        color: 'white',
                        fontFamily: fonts.MAIN,
                        fontSize: 14,
                    }}>
                        {format(progress.seekableDuration)}
                    </Text>
                </View>

                <TouchableOpacity onPress={handleFullScreen}
                    style={{
                        position: 'absolute',
                        right: 10,
                    }}>
                    <Image
                        source={require('@images/video/expand.png')}
                        style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>

        </>
    )
};

export default memo(SmallScreenMode);
