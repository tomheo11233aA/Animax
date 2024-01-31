package com.animax

import android.media.AudioManager
import android.content.Context
import android.media.AudioManager.OnAudioFocusChangeListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
class AudioFocusModule (reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){
    private var audioFocusRequest: Int? = null
    private val audioChangeListener = OnAudioFocusChangeListener { focusChange ->
        when (focusChange) {
            AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> {
                // Lower the volume
            }
            AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                // Pause playback
            }
            AudioManager.AUDIOFOCUS_LOSS -> {
                // Stop playback
            }
            AudioManager.AUDIOFOCUS_GAIN -> {
                // Resume playback or Raise it back to normal
            }
        }
    }

    override fun getName(): String {
        return "AudioFocusModule"
    }
    @ReactMethod
    fun requestAudioFocus(promise: Promise) {
        val audioManager = reactApplicationContext.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audioManager.requestAudioFocus(null, AudioManager.STREAM_MUSIC, AudioManager.AUDIOFOCUS_GAIN)
        if (audioFocusRequest == AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
            promise.resolve(true)
        } else {
            promise.resolve(false)
        }
    }
    @ReactMethod
    fun abandonAudioFocus() {
        val audioManager = reactApplicationContext.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audioManager.abandonAudioFocus(null)
//        đoạn code có tác dụng bỏ audio focus, khi đó app khác có thể phát nhạc được
    }
}