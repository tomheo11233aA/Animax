import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';
import { goBack } from '@utils/navigationRef';
import Box from '@common/Box';
import Txt from '@common/Txt';
import { CastButton } from 'react-native-google-cast';
import FullScreenMode from './FullScreenMode';

interface Props {
    formatName: (name: string) => string;
    data: any[];
    currentVideoIndex: number;
    progress: { currentTime: number, seekableDuration: number };
    format: (seconds: number) => string;
    onSliderValueChange: (value: number) => void;
    isMutted: boolean;
    setIsMutted: (value: boolean) => void;
    videoRef: React.RefObject<any>;
    paused: boolean;
    setPaused: (value: boolean) => void;
    handlePreviousVideo: () => void;
    handleNextVideo: () => void;
    handlePictureInPicture: () => void;
    requestAudioFocus: () => void;
    abandonAudioFocus: () => void;
    showSpeedSelector: () => void;
    playbackRate: number;
    fullScreen: boolean;
    handleFullScreen: () => void;
}

const VideoControl: React.FC<Props> = ({
    formatName,
    data,
    currentVideoIndex,
    progress,
    format,
    onSliderValueChange,
    isMutted,
    setIsMutted,
    videoRef,
    paused,
    setPaused,
    handlePreviousVideo,
    handleNextVideo,
    handlePictureInPicture,
    requestAudioFocus,
    abandonAudioFocus,
    showSpeedSelector,
    playbackRate,
    fullScreen,
    handleFullScreen,
}) => {
    return (
        <View style={{
            width: '100%',
            height: fullScreen ? '100%' : 200,
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,.5)',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/* top left control */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: hp('4%'),
                left: 20,
            }}>
                <TouchableOpacity
                    onPress={() => {
                        goBack();
                    }}>
                    <Image
                        source={require('@images/video/back.png')}
                        style={{ width: 25, height: 25, marginRight: 20 }}
                    />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontFamily: fonts.MAINB, fontSize: 16 }}>
                    {formatName(data[currentVideoIndex].name)}
                </Text>
            </View>

            {fullScreen === true && (
                <FullScreenMode
                    formatName={formatName}
                    data={data}
                    currentVideoIndex={currentVideoIndex}
                    progress={progress}
                    format={format}
                    onSliderValueChange={onSliderValueChange}
                    videoRef={videoRef}
                    paused={paused}
                    setPaused={setPaused}
                    handlePreviousVideo={handlePreviousVideo}
                    handleNextVideo={handleNextVideo}
                    handlePictureInPicture={handlePictureInPicture}
                    requestAudioFocus={requestAudioFocus}
                    abandonAudioFocus={abandonAudioFocus}
                    showSpeedSelector={showSpeedSelector}
                    playbackRate={playbackRate}
                    handleFullScreen={handleFullScreen}
                />
            )}

        </View>
    )
}

export default VideoControl;