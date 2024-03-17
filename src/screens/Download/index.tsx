import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch } from '@hooks/redux'
import { setLanguage } from '@redux/slice/userSlice'
import { useTranslation } from 'react-i18next'
import { convertLanguage } from '@utils/convert'
import { saveVideo } from '@utils/downloadVideo'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Alert } from 'react-native'
import Video from 'react-native-video'
import { downloadAndSaveVideo } from '@utils/downloadVideo'
import { PermissionsAndroid, Platform } from "react-native";
import { set } from 'lodash'

const Download = () => {
  const dispatch = useAppDispatch()
  const { i18n, t } = useTranslation()

  const [videoPath, setVideoPath] = React.useState<string>('')


  const hasAndroidPermission = async () => {
    const getCheckPermissionPromise = () => {
      if (Number(Platform.Version) >= 33) {
        return Promise.all([
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
        ]).then(
          ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
      } else {
        return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      }
    }

    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      console.log('hasPermission', hasPermission);
      return true;
    }

    const getRequestPermissionPromise = () => {
      if (Number(Platform.Version) >= 33) {
        return PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]).then(
          (statuses) =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
        );
      } else {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
      }
    };
    return await getRequestPermissionPromise();
  }


  const downloadVideo = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }
    downloadAndSaveVideo('https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%5B%20Lyric%20video%20%5D%20Ai.%20-%20Bray.mp4?alt=media&token=7f7bdd33-daee-491a-9f90-d387f39a15de')
  }

  return (
    <View>
      <Text>{t('Download')}</Text>
      <TouchableOpacity onPress={downloadVideo}
        style={{
          padding: 20,
          backgroundColor: 'green',
          marginTop: 20
        }}
      >
        <Text>Download Video</Text>
      </TouchableOpacity>

      <Video
        source={{ uri: '/data/user/0/com.animax/cache/1710598303416.mp4' }}
        // source={{uri: "content://media/external/video/media/1000027122"}}
        style={{ width: 400, height: 300, backgroundColor: 'red' }}
        controls={true}
        onError={(error) => console.log(error)}

      />
    </View>
  )
}

export default Download