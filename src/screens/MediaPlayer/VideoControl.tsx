import React, { memo } from 'react';
import { View } from 'react-native';
import FullScreenMode from './FullScreenMode';
import SmallScreenMode from './SmallScreenMode';

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
    volume: number;
    setVolume: (value: number) => void;
    isVolumeSliderVisible: boolean;
    setIsVolumeSliderVisible: (value: boolean) => void;
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
    volume,
    setVolume,
    isVolumeSliderVisible,
    setIsVolumeSliderVisible,
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
                    volume={volume}
                    setVolume={setVolume}
                    isVolumeSliderVisible={isVolumeSliderVisible}
                    setIsVolumeSliderVisible={setIsVolumeSliderVisible}
                />
            )}

            {fullScreen === false && (
                <SmallScreenMode
                    data={data}
                    currentVideoIndex={currentVideoIndex}
                    progress={progress}
                    format={format}
                    onSliderValueChange={onSliderValueChange}
                    videoRef={videoRef}
                    paused={paused}
                    setPaused={setPaused}
                    handlePictureInPicture={handlePictureInPicture}
                    requestAudioFocus={requestAudioFocus}
                    abandonAudioFocus={abandonAudioFocus}
                    showSpeedSelector={showSpeedSelector}
                    handleFullScreen={handleFullScreen}
                />
            )}
        </View>
    )
}

export default memo(VideoControl);