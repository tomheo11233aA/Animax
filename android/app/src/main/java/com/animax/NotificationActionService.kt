package com.animax

import android.app.Service
import android.content.Intent
import android.os.IBinder
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule

class NotificationActionService(private val reactContext: ReactContext) : Service() {
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        when (intent?.action) {
            "ACTION_PREVIOUS" -> {
                sendEvent(reactContext, "onPrevious", null)
            }
            "ACTION_PAUSE" -> {
                sendEvent(reactContext, "onPause", null)
            }
            "ACTION_NEXT" -> {
                sendEvent(reactContext, "onNext", null)
            }
            "ACTION_PLAY" -> {
                sendEvent(reactContext, "onPlay", null)
            }
        }
        return START_NOT_STICKY
    }

    override fun onBind(intent: Intent?): IBinder? {
        return null
    }

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: Any?) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit(eventName, params)
    }
}