package com.animax

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.os.Build
import android.support.v4.media.session.MediaSessionCompat
import androidx.core.app.NotificationCompat
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VideoNotificationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "VideoNotificationModule"
    }

    @ReactMethod
    fun showNotification(title: String?, content: String?) {
        val notificationManager = reactApplicationContext.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val channelId = "VideoNotificationModule"
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                channelId,
                "Video Notifications",
                NotificationManager.IMPORTANCE_DEFAULT
            )
            notificationManager.createNotificationChannel(channel)
        }

        // Create a MediaSessionCompat
        val mediaSession = MediaSessionCompat(reactApplicationContext, "tag")

        // Build the notification
        val builder = NotificationCompat.Builder(reactApplicationContext, channelId)
            .setContentTitle(title)
            .setContentText(content)
            .setSmallIcon(R.mipmap.ic_launcher_monochrome)
            .setLargeIcon(BitmapFactory.decodeResource(reactApplicationContext.resources, R.mipmap.ic_launcher_monochrome)) // Replace with your album art


//            .addAction(android.R.drawable.ic_media_previous, "Previous", PendingIntent.getBroadcast(reactApplicationContext, 0, Intent("ACTION_PREVIOUS"), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)) // #0
//            .addAction(android.R.drawable.ic_media_pause, "Pause", PendingIntent.getBroadcast(reactApplicationContext, 1, Intent("ACTION_PAUSE"), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE))  // #1
//            .addAction(android.R.drawable.ic_media_next, "Next", PendingIntent.getBroadcast(reactApplicationContext, 2, Intent("ACTION_NEXT"), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE))     // #2


            .setStyle(
                androidx.media.app.NotificationCompat.MediaStyle()
                    .setShowActionsInCompactView(1)
                    .setMediaSession(mediaSession.sessionToken)
            )

        notificationManager.notify(1, builder.build())
    }
}