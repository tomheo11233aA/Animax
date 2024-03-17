package com.animax
import android.content.ContentValues;
import android.content.Context;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.io.OutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
class VideoSaverModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule() {
    override fun getName(): String {
        return "VideoSaver"
    }

    @ReactMethod
    fun saveVideoToGallery(videoUrl: String, fileName: String, callback: Callback){
        try {
            val values = ContentValues().apply {
                put(MediaStore.Video.Media.DISPLAY_NAME, fileName)
                put(MediaStore.Video.Media.MIME_TYPE, "video/mp4")
                put(MediaStore.Video.Media.RELATIVE_PATH, Environment.DIRECTORY_MOVIES + "/Animax")
            }
            val context: Context = reactContext
            val uri: Uri? = context.contentResolver.insert(MediaStore.Video.Media.EXTERNAL_CONTENT_URI, values)
            uri?.let{
                context.contentResolver.openOutputStream(it).use { outputStream ->
                    URL(videoUrl).openConnection().let {connecttion ->
                        (connecttion as HttpURLConnection).inputStream.use { inputStream ->
                            val buffer = ByteArray(4 * 1024) // or other buffer size
                            var length: Int
                            while (inputStream.read(buffer).also { len -> length = len } > 0) {
                                outputStream?.write(buffer, 0, length)
                            }
                            outputStream?.flush()
                        }
                    }
                }
                callback.invoke(null, uri.toString())
            } ?: run {
                callback.invoke("Failed to save video to gallery")
            }
        }catch (e: Exception){
            callback.invoke(e.message)
        }
    }
}