import { StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { StatusBar } from 'react-native';
import { colors } from '@themes/colors';
import VideoControl from './VideoControl';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { NativeModules } from 'react-native';
import { AppState } from 'react-native';
import ModalSpeed from './ModalSpeed';

const { PipModule, AudioFocusModule } = NativeModules;

const MAX_NAME_LENGTH = 30;
const MediaPlayer = () => {

    useEffect(() => {
        requestAudioFocus();
        return () => {
            abandonAudioFocus();
        };
    }, []);
    useEffect(() => {
        StatusBar.setHidden(true);
        changeNavigationBarColor('transparent', true);
        return () => {
            StatusBar.setHidden(false);
            changeNavigationBarColor('white', true);
        };
    }, []);
    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'background') {
                enterPiPMode();
            }
        });
        return () => {
            subscription.remove();
        };
    }, []);
    useEffect(() => {
        Orientation.addOrientationListener((orientation) => {
            if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
                setFullScreen(true);
            } else {
                setFullScreen(false);
            }
        });
    }, []);
    useEffect(() => {
        const subscription = AppState.addEventListener('change', handleAppStateChange);
        return () => {
            subscription.remove();
        }
    }, []);
    // useEffect(() => {
    //     resetTimeout();
    //     return () => {
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }
    //     };
    // }, []);

    const [isPipMode, setIsPipMode] = useState(false);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState({
        currentTime: 0,
        seekableDuration: 0,
        playableDuration: 0
    });
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef<Video>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isMutted, setIsMutted] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isSpeedSelectorVisible, setIsSpeedSelectorVisible] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleNextVideo = () => {
        if (currentVideoIndex < data.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    }
    const handlePreviousVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    }
    const handleBuffer = ({ isBuffering }: { isBuffering: boolean }) => {
        setIsLoading(isBuffering);

    };
    const format = (seconds: number) => {
        if (seconds == null) return '00:00';
        let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        let secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };
    const toggleFullScreen = () => {
        if (fullScreen) {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
        setFullScreen(!fullScreen);
    };
    const resetTimeout = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeoutId(setTimeout(() => setShowControls(false), 5000));
    };
    const handlePress = () => {
        if (showControls) {
            setShowControls(false);
        } else {
            setShowControls(true);
            // resetTimeout();
        }
    };
    const formatName = (name: string) => {
        if (name.length > MAX_NAME_LENGTH) {
            return name.slice(0, 30) + '...';
        } else {
            return name;
        }
    };
    const onSliderValueChange = (value: any) => {
        if (videoRef.current) {
            videoRef.current.seek(value);
            setIsSeeking(true);
        }
    };
    const checkPipMode = () => {
        PipModule.isInPipMode().then((isInPipMode: any) => {
            setIsPipMode(isInPipMode);
        }).catch((error: any) => {
            console.error(error);
        });
    }
    const handleAppStateChange = (nextAppState: any) => {
        if (nextAppState === 'active') {
            checkPipMode();
        } else if (nextAppState === 'background') {
            checkPipMode();
        }
    }
    const enterPiPMode = () => {
        setShowControls(false);
        PipModule.enterPipMode();
    };
    const requestAudioFocus = () => {
        AudioFocusModule.requestAudioFocus().then((res: any) => {
        }).catch((error: any) => {
            console.error(error);
        });
    };
    const abandonAudioFocus = () => {
        AudioFocusModule.abandonAudioFocus();
    };
    const handleVolumeChange = (value: any) => {
        setVolume(value);
    }
    const onProgress = (data: any) => {
        setProgress({
            currentTime: data.currentTime,
            seekableDuration: data.seekableDuration,
            playableDuration: data.playableDuration
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: '100%'
                }}
                onPress={handlePress}
                activeOpacity={0.94}
            >
                <ModalSpeed
                    isVisible={isSpeedSelectorVisible}
                    onClose={() => setIsSpeedSelectorVisible(false)}
                    onSpeedChange={(speed) => {
                        setPlaybackRate(speed);
                        setIsSpeedSelectorVisible(false);
                    }}
                    currentSpeed={playbackRate}
                />
                <Video
                    paused={paused}
                    // source={{ uri: data[currentVideoIndex].link }}
                    source={{ uri: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8', type: 'm3u8' }}
                    ref={videoRef}
                    onProgress={onProgress}
                    onBuffer={handleBuffer}
                    onLoadStart={() => setIsLoading(true)}
                    onLoad={() => setIsLoading(false)}
                    style={{
                        width: '100%',
                        height: isPipMode ? '100%' : fullScreen ? '100%' : 200,
                        backgroundColor: 'black'
                    }}
                    resizeMode="contain"
                    muted={isMutted}
                    playInBackground={true}
                    rate={playbackRate}
                    volume={volume}
                    onEnd={() => {
                        if (currentVideoIndex < data.length - 1) {
                            setCurrentVideoIndex(currentVideoIndex + 1);
                        }
                    }}
                    onSeek={({ currentTime }) => {
                        setProgress({ ...progress, currentTime });
                        setIsSeeking(false);
                    }}
                />
                {(isLoading || isSeeking) && (
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'rgba(0,0,0,.5)',
                            height: isPipMode ? '100%' : fullScreen ? '100%' : 200,
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ActivityIndicator size="large" color={colors.mainColor} />
                    </View>
                )}
                {showControls && (
                    <VideoControl
                        formatName={formatName}
                        data={data}
                        currentVideoIndex={currentVideoIndex}
                        progress={progress}
                        format={format}
                        onSliderValueChange={onSliderValueChange}
                        isMutted={isMutted}
                        setIsMutted={setIsMutted}
                        videoRef={videoRef}
                        paused={paused}
                        setPaused={setPaused}
                        handlePreviousVideo={handlePreviousVideo}
                        handleNextVideo={handleNextVideo}
                        handlePictureInPicture={enterPiPMode}
                        requestAudioFocus={requestAudioFocus}
                        abandonAudioFocus={abandonAudioFocus}
                        showSpeedSelector={() => setIsSpeedSelectorVisible(true)}
                        playbackRate={playbackRate}
                        fullScreen={fullScreen}
                        handleFullScreen={toggleFullScreen}
                        volume={volume}
                        setVolume={handleVolumeChange}
                        isVolumeSliderVisible={isVolumeSliderVisible}
                        setIsVolumeSliderVisible={setIsVolumeSliderVisible}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default MediaPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

var data = [
    {
        id: 1,
        name: 'Shadow Of The Sun - Professor Green',
        link: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/y2mate.com%20-%20Shadow%20Of%20The%20Sun%20%20Professor%20Green%20%20Lyrics%20%20Vietsub%20_720p.mp4?alt=media&token=58f27fc0-539a-49c5-96a1-910de1f8fa10',
    },
    {
        id: 2,
        name: 'Shadow Of 2 The Sun - Professor Green',
        link: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%5B%20Lyric%20video%20%5D%20Ai.%20-%20Bray.mp4?alt=media&token=7f7bdd33-daee-491a-9f90-d387f39a15de',
    }
]