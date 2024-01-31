package com.animax

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule

class NotificationActionReceiver(private val reactContext: ReactContext) : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        when (intent.action) {
            "ACTION_PREVIOUS" -> {
                sendEvent(reactContext, "onPrevious", null)
                Log.d("NotificationActionReceiver", "onPrevious")
            }
            "ACTION_PAUSE" -> {
                sendEvent(reactContext, "onPause", null)
                Log.d("NotificationActionReceiver", "onPause")
            }
            "ACTION_NEXT" -> {
                sendEvent(reactContext, "onNext", null)
                Log.d("NotificationActionReceiver", "onNext")
            }
            "ACTION_PLAY" -> {
                sendEvent(reactContext, "onPlay", null)
                Log.d("NotificationActionReceiver", "onPlay")
            }
        }
    }

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: Any?) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit(eventName, params)
    }
}