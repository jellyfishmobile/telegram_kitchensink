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
      // Request biometric authentication from Telegram
      const success = await webApp.showPopup({
        title: 'Biometric Authentication',
        message: 'Please authenticate using your biometrics',
        buttons: [{
          id: 'authenticate',
          type: 'default',
          text: 'Authenticate'
        }]
      }).then(async (buttonId) => {
        if (buttonId === 'authenticate') {
          return await webApp.requestBiometricAuthentication({
            title: 'Authenticate',
            subtitle: 'Please verify your identity'
          });
        }
        return false;
      });
      
      if (success) {
        setIsAuthenticated(true);
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
      } else {
        throw new Error('Authentication cancelled or failed');
      }
      
    } catch (error) {
      console.error('Authentication error:', error);
      showPopup({
        title: 'Authentication Failed',
        message: 'Biometric authentication failed. Would you like to try again?',
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