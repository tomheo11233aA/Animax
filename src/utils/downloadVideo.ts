import { Platform, NativeModules, ToastAndroid } from "react-native";
import RNFS from "react-native-fs";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

const { VideoSaver } = NativeModules;

export const saveVideo = (videoUrl: string, fileName: string) => {
    return new Promise((resolve, reject) => {
        VideoSaver.saveVideoToGallery(videoUrl, fileName, (error: any, success: any) => {
            if (error) {
                reject(error);
            } else {
                resolve(success);
            }
        });
    });
};

export const downloadAndSaveVideo = async (videoUrl: string) => {
    const directionPath = RNFS.CachesDirectoryPath;
    const timeStamp = new Date().getTime();
    const localVideoPath = `${directionPath}/${timeStamp}.mp4`;
    try {
        const downloadResult = await RNFS.downloadFile({
            fromUrl: videoUrl,
            toFile: localVideoPath,
        }).promise;

        if (downloadResult.statusCode === 200) {
            await CameraRoll.save(localVideoPath, { type: "video" });
            ToastAndroid.show("Video saved successfully", ToastAndroid.SHORT);
            // log ra path cua video
            console.log("Video saved successfully", localVideoPath);
        } else {
            throw new Error("Download failed with status code " + downloadResult.statusCode);
        }
    } catch (error) {
        console.error("Error downloading video: ", error);
        ToastAndroid.show("Error downloading video: " + error, ToastAndroid.LONG);
    }
};