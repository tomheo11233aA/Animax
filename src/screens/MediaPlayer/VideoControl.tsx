import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { fonts } from '@themes/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { goBack } from '@utils/navigationRef';
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

export default memo(VideoControl);