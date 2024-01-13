import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const testLink = 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/y2mate.com%20-%20Shadow%20Of%20The%20Sun%20%20Professor%20Green%20%20Lyrics%20%20Vietsub%20_720p.mp4?alt=media&token=58f27fc0-539a-49c5-96a1-910de1f8fa10'

const ForgotPassword = () => {
  changeNavigationBarColor('transparent', true);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState({ currentTime: 0, seekableDuration: 0 });
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<Video>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMutted, setIsMutted] = useState(false);
  const [isScreenLocked, setIsScreenLocked] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
  const handlePress = () => {
    if (showControls) {
      setShowControls(false);
    } else {
      setShowControls(true);
      setTimeout(() => {
        setShowControls(false);
      }, 5000);
    }
  };
  const formatName = (name: string) => {
    if (name.length > 30) {
      return name.slice(0, 30) + '...';
    } else {
      return name;
    }
  };

  const onSliderValueChange = (value: any) => {
    setProgress({ ...progress, currentTime: value });
    videoRef.current?.seek(value);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity
        style={{ width: '100%', height: '100%' }}
        onPress={handlePress}
        activeOpacity={0.94}
      >
        <Video
          paused={paused}
          // source={{ uri: testLink }}
          source={{ uri: data[currentVideoIndex].link }}
          ref={videoRef}
          onProgress={setProgress}
          onBuffer={handleBuffer}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
          style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
          resizeMode="contain"
          muted={isMutted}
        />
        {isLoading && (
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color={colors.mainColor} />
          </View>
        )}
        {showControls && (
          <View style={{
            width: '100%',
            height: '100%',
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
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/back.png')}
                  style={{ width: 25, height: 25, marginRight: 20 }}
                />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontFamily: fonts.MAINB, fontSize: 16 }}>
                {/* {formatName('Shadow Of The Sun - Professor Green')} */}
                {formatName(data[currentVideoIndex].name)}
              </Text>
            </View>

            {/* top right control */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              top: hp('4%'),
              right: 20,
            }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/speed.png')}
                  style={{ width: 20, height: 20, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/stopwatch.png')}
                  style={{ width: 20, height: 20, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/caption.png')}
                  style={{ width: 20, height: 20, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/episodes.png')}
                  style={{ width: 20, height: 20, marginRight: 20, tintColor: 'white' }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/dots.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
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
                paddingLeft: 20,
                paddingRight: 20,
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

            {/* left control */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: hp('5.5%'),
              left: 20,
            }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/lock.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsMutted(!isMutted);
                  console.log('click');
                }}>
                <Image
                  source={isMutted ? require('@images/video/mute.png') : require('@images/video/volume.png')}
                  style={{ width: 20, height: 20, marginLeft: 20 }}
                />
              </TouchableOpacity>
            </View>

            {/* main control */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: hp('5.5%'),
            }}>
              <TouchableOpacity
                onPress={() => {
                  videoRef?.current?.seek(progress.currentTime - 10);
                }}>
                <Image
                  source={require('@images/video/back10s.png')}
                  style={{ width: 28, height: 28, marginRight: 35 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePreviousVideo}
                disabled={currentVideoIndex === 0}
                style={{ opacity: currentVideoIndex === 0 ? 0.3 : 1 }}
              >
                <Image
                  source={require('@images/video/previous.png')}
                  style={{ width: 16, height: 16 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!paused);
                }}>
                <Image
                  source={
                    paused
                      ? require('@images/video/pause.png')
                      : require('@images/video/play.png')
                  }
                  style={{ marginHorizontal: 35, width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNextVideo}
                disabled={currentVideoIndex === data.length - 1}
                style={{ opacity: currentVideoIndex === data.length - 1 ? 0.3 : 1 }}
               >
                <Image
                  source={require('@images/video/next.png')}
                  style={{ width: 16, height: 16 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  videoRef?.current?.seek(progress.currentTime + 10);
                }}>
                <Image
                  source={require('@images/video/next10s.png')}
                  style={{ width: 28, height: 28, marginLeft: 35 }}
                />
              </TouchableOpacity>
            </View>

            {/* right control */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: hp('5.5%'),
              right: 20,
            }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/download.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('click');
                }}>
                <Image
                  source={require('@images/video/stopwatch.png')}
                  style={{ width: 20, height: 20, marginLeft: 20 }}
                />
              </TouchableOpacity>
            </View>

          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

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