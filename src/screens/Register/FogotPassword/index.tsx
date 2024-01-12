import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

const testLink = 'https://firebasestorage.googleapis.com/v0/b/animax-cd9bd.appspot.com/o/%5BMFS-FHD-V3%20Complete%5D%20Detective%20Conan%20Movie%2026%20(2023)%20-%20T%C3%A0u%20Ng%E1%BA%A7m%20S%E1%BA%AFt%20M%C3%A0u%20%C4%90en.mp4?alt=media&token=2c30ce37-ce46-411a-aa28-01adf6aea91d'

const ForgotPassword = () => {
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState({ currentTime: 0, seekableDuration: 0 });
  const [fullScreen, setFullScreen] = useState(false);
  const videoRef = useRef<Video>(null);

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
        onPress={() => setClicked(!clicked)}
      >
        <Video
          paused={paused}
          source={{ uri: testLink }}
          ref={videoRef}
          onProgress={setProgress}
          muted
          style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => {
                  videoRef?.current?.seek(progress.currentTime - 10);
                }}>
                <Image
                  source={require('@images/video/back10s.png')}
                  style={{ width: 30, height: 30, tintColor: 'white' }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!paused);
                }}>
                <Image
                  source={
                    paused
                      ? require('@images/video/play.png')
                      : require('@images/video/play.png')
                  }
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  videoRef?.current?.seek(progress.currentTime + 10);
                }}>
                <Image
                  source={require('@images/video/next10s.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center'
              }}>
              <Text style={{ color: 'white' }}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{ width: '80%', height: 40 }}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                onValueChange={(x) => {
                  videoRef?.current?.seek?.(x);
                }}
              />
              <Text style={{ color: 'white' }}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 10,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center'
              }}>
              <TouchableOpacity onPress={() => {
                if (fullScreen) {
                  Orientation.lockToPortrait();
                } else {
                  Orientation.lockToLandscape();
                }
                setFullScreen(!fullScreen)
              }}>
                <Image source={fullScreen ? require('@images/video/zoom-in.png') : require('@images/video/zoom-out.png')}
                  style={{ width: 24, height: 24, tintColor: 'white' }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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