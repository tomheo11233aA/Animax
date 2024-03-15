import RNFS from 'react-native-fs';

export const downloadVideo = async (url: string, name: string) => {
    const newFolderPath = `${RNFS.DocumentDirectoryPath}/MyVideos`;
    try {
        const folderExists = await RNFS.exists(newFolderPath);
        if (!folderExists) {
            await RNFS.mkdir(newFolderPath);
            console.log('New folder created');
        }

        const filePath = `${newFolderPath}/${name}.mp4`;

        const downloadResult = await RNFS.downloadFile({
            fromUrl: url,
            toFile: filePath,
        }).promise;

        console.log('Video downloaded to:', filePath, downloadResult);
    } catch (error) {
        console.error('Error downloading or saving video:', error);
    }
};