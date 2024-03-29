import React, { memo, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';
import Box from '@common/Box';
import Txt from '@common/Txt';

interface Props {
    formatName: (name: string) => string;
    data: any[];
    currentVideoIndex: number;
    progress: { currentTime: number, seekableDuration: number };
    format: (seconds: number) => string;
    onSliderValueChange: (value: number) => void;
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
    handleFullScreen: () => void;
    volume: number;
    setVolume: (value: number) => void;
    isVolumeSliderVisible: boolean;
    setIsVolumeSliderVisible: (value: boolean) => void;
}

const FullScreenMode: React.FC<Props> = ({
    formatName,
    data,
    currentVideoIndex,
    progress,
    format,
    onSliderValueChange,
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
    handleFullScreen,
    volume,
    setVolume,
    isVolumeSliderVisible,
    setIsVolumeSliderVisible
}) => {
    const [hideVolumeSliderTimeout, setHideVolumeSliderTimeout] = useState<NodeJS.Timeout | null>(null);
    // useEffect(() => {
    //     if (hideVolumeSliderTimeout) {
    //         clearTimeout(hideVolumeSliderTimeout);
    //     }

    //     if (isVolumeSliderVisible) {
    //         setHideVolumeSliderTimeout(setTimeout(() => {
    //             setIsVolumeSliderVisible(false);
    //         }, 2000));
    //     }
    // }, [isVolumeSliderVisible]);
    return (
        <>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: hp('4%'),
                left: 20,
            }}>
                <TouchableOpacity
                    onPress={() => {
                        handleFullScreen();
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
            {/* Top right control */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: hp('4%'),
                right: wp('5%'),
            }}>
                <TouchableOpacity
                    onPress={handlePictureInPicture}>
                    <Image
                        source={require('@images/video/pip.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log('ở đây sẽ làm hiện một cái drawer chứa các tập phim')
                    }}>
                    <Image
                        source={require('@images/video/stack.png')}
                        style={{ width: 25, height: 25, marginLeft: 20 }}
                    />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <CastButton style={{ width: 25, height: 25, marginLeft: 20 }} />
                </TouchableOpacity> */}
            </View>

            {/* Bottom */}
            {/* slider */}
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: hp('10%'),
                    paddingHorizontal: wp('5%'),
                    alignItems: 'center'
                }}>
                <Text style={{ color: 'white', fontFamily: fonts.MAIN }}>
                    {format(progress.currentTime)}
                </Text>
                <Slider
                    style={{ width: '90%', height: 50 }}
                    minimumValue={0}
                    maximumValue={progress.seekableDuration}
                    minimumTrackTintColor={colors.mainColor}
                    maximumTrackTintColor="#fff"
                    value={progress.currentTime}
                    onValueChange={onSliderValueChange}
                    thumbTintColor='white'
                />
                <Text style={{ color: 'white', fontFamily: fonts.MAIN }}>
                    {format(progress.seekableDuration)}
                </Text>
            </View>

            {/* main control */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                justifyContent: 'center',
            }}>
                <TouchableOpacity
                    onPress={() => {
                        videoRef?.current?.seek(progress.currentTime - 10);
                    }}>
                    <Image
                        source={require('@images/video/back10s.png')}
                        style={{
                            width: 28,
                            height: 28,
                            marginRight: wp('5%')
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setPaused(!paused);
                        if (paused) {
                            requestAudioFocus();
                        } else {
                            abandonAudioFocus();
                        }
                    }}>
                    <Image
                        source={
                            paused
                                ? require('@images/video/play.png')
                                : require('@images/video/pause.png')
                        }
                        style={{ marginHorizontal: 35, width: 30, height: 30 }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        videoRef?.current?.seek(progress.currentTime + 10);
                    }}>
                    <Image
                        source={require('@images/video/next10s.png')}
                        style={{
                            width: 28,
                            height: 28,
                            marginLeft: wp('5%')
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* bottom control */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                justifyContent: 'space-around',
                bottom: hp('5.5%'),
                width: '100%',
            }}>
                <TouchableOpacity
                    onPress={handlePreviousVideo}
                    disabled={currentVideoIndex === 0}
                    style={{ opacity: currentVideoIndex === 0 ? 0.3 : 1 }}
                >
                    <Box row alignCenter>
                        <Image
                            source={require('@images/video/previous.png')}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Txt color={'white'} size={12} marginLeft={5}>{`Previous Ep.`}</Txt>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        showSpeedSelector();
                    }}>
                    <Box row alignCenter>
                        <Image
                            source={require('@images/video/speed.png')}
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                        <Txt color={'white'} size={12} marginLeft={5}>{`Speed (${playbackRate}x)`}</Txt>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                    }}>
                    <Box row alignCenter>
                        <Image
                            source={require('@images/video/lock.png')}
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                        <Txt color={'white'} size={12} marginLeft={5}>{`Lock`}</Txt>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setIsVolumeSliderVisible(!isVolumeSliderVisible);
                    }}>
                    <Box row alignCenter>
                        <Image
                            source={require('@images/video/download.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        <Txt color={'white'} size={12} marginLeft={5}>{`Episodes`}</Txt>
                    </Box>
                </TouchableOpacity>
                {isVolumeSliderVisible && (
                    <View style={{
                        position: 'absolute',
                        top: -hp('20%'),
                        right: '23%',
                        width: wp('30%'),
                        height: hp('10%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000
                    }}>
                        <Slider
                            style={{
                                width: '100%',
                                transform: [{ rotate: '-90deg' }],
                                height: 50 
                            }}
                            thumbImage={require('@images/video/volume.png')}
                            step={0.1}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor={colors.mainColor}
                            maximumTrackTintColor="#fff"
                            value={volume}
                            onValueChange={setVolume}
                        />
                    </View>
                )}
                <TouchableOpacity
                    onPress={handleNextVideo}
                    disabled={currentVideoIndex === data.length - 1}
                    style={{ opacity: currentVideoIndex === data.length - 1 ? 0.3 : 1 }}
                >
                    <Box row alignCenter>
                        <Image
                            source={require('@images/video/next.png')}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Txt color={'white'} size={12} marginLeft={5}>{`Next Ep.`}</Txt>
                    </Box>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default memo(FullScreenMode);
