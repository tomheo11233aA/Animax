package com.animax
import android.app.PictureInPictureParams
import android.util.Rational
import com.facebook.react.bridge.Promise
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

    @ReactMethod
    fun isInPipMode(promise: Promise){
        val activity = currentActivity
        if (activity != null) {
            promise.resolve(activity.isInPictureInPictureMode)
        } else {
            promise.reject("ERR_UNEXPECTED_EXCEPTION", "Activity doesn't exist")
        }
    }
}