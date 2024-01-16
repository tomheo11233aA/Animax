package com.animax
import android.app.PictureInPictureParams
import android.util.Rational
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PipModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "PipModule"
    }

    @ReactMethod
    fun enterPipMode() {
        val activity = currentActivity
        if (activity != null) {
            val params = PictureInPictureParams.Builder()
            activity.enterPictureInPictureMode(params.build())
        }
    }

    @ReactMethod
    fun exitPipMode() {
        val activity = currentActivity
        activity?.finish()
    }
}