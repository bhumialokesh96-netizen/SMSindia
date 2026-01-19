package com.example.smsindia

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat

class MainActivity : AppCompatActivity() {

    private val permissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) {
            Toast.makeText(this, "SMS permission granted", Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(this, "SMS permission denied. Enable in settings.", Toast.LENGTH_LONG).show()
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val startButton: Button = findViewById(R.id.startServiceButton)
        startButton.setOnClickListener {
            startSmsService()
        }

        requestSmsPermission()
    }

    private fun requestSmsPermission() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.SEND_SMS) != PackageManager.PERMISSION_GRANTED) {
            permissionLauncher.launch(Manifest.permission.SEND_SMS)
        }
    }

    private fun startSmsService() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.SEND_SMS) == PackageManager.PERMISSION_GRANTED) {
            val serviceIntent = Intent(this, SmsService::class.java)
            startForegroundService(serviceIntent)
            Toast.makeText(this, "Service started", Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(this, "Grant SMS permission first", Toast.LENGTH_SHORT).show()
        }
    }
}