import React from 'react';

export function BiometricInstructions() {
  return (
    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="font-semibold mb-2">Setup Instructions</h3>
      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <p>To use biometric authentication in Telegram:</p>
        <div className="ml-4">
          <p>1. Open Telegram Settings</p>
          <p>2. Go to Privacy and Security</p>
          <p>3. Enable Passcode Lock</p>
          <p>4. Enable Unlock with Fingerprint/Face ID</p>
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Note: Biometric authentication requires Telegram version 6.9 or higher
        </p>
      </div>
    </div>
  );
}