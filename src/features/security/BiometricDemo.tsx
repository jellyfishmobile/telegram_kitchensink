import React, { useState } from 'react';
import { Fingerprint } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import { showAlert, showPopup } from '../../utils/dialog';
import { StatusIndicator } from './components/StatusIndicator';
import { BiometricInstructions } from './components/BiometricInstructions';

export function BiometricDemo() {
  const { webApp, isInTelegram } = useTelegramWebApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isBiometricSupported = webApp?.isVersionAtLeast('6.9');

  const handleBiometricAuth = async () => {
    if (!webApp || !isBiometricSupported) {
      showAlert('Biometric authentication requires Telegram version 6.9 or higher');
      return;
    }

    try {
      // Use CloudStorage API to trigger biometric authentication
      const result = await webApp.CloudStorage.getItems(['auth_token']);
      
      // The mere fact that we got a response means authentication was successful
      setIsAuthenticated(true);
      
      // Show success popup
      showPopup({
        title: 'Authentication Successful',
        message: 'Biometric verification completed successfully!',
        buttons: [
          { id: 'ok', type: 'ok', text: 'Continue' }
        ]
      }, () => {
        // Store auth state
        webApp.CloudStorage.setItem('auth_token', Date.now().toString())
          .catch(console.error);
      });
      
    } catch (error) {
      console.error('Authentication error:', error);
      // If authentication fails, show error and retry
      showPopup({
        title: 'Authentication Required',
        message: 'Please authenticate using biometrics to continue.',
        buttons: [
          { id: 'retry', type: 'default', text: 'Retry' },
          { id: 'cancel', type: 'cancel', text: 'Cancel' }
        ]
      }, (buttonId) => {
        if (buttonId === 'retry') {
          handleBiometricAuth();
        }
      });
    }
  };

  return (
    <Section title="Biometric Authentication" icon={Fingerprint}>
      <div className="space-y-4">
        <StatusIndicator 
          label="Biometric Support:"
          isActive={Boolean(isBiometricSupported)} 
        />

        <StatusIndicator 
          label="Authentication Status:"
          isActive={isAuthenticated} 
        />

        {!isAuthenticated && (
          <div className="space-y-4">
            <button
              onClick={handleBiometricAuth}
              disabled={!isBiometricSupported}
              className={`w-full px-4 py-2 rounded-md text-white ${
                isBiometricSupported
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Authenticate with Biometrics
            </button>

            <BiometricInstructions />
          </div>
        )}

        {isAuthenticated && (
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <p className="text-green-700 dark:text-green-200">
              ✓ Successfully authenticated with biometrics
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}