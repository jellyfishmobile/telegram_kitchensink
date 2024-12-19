import React from 'react';
import { Shield, CheckCircle, XCircle } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import { showAlert } from '../../utils/dialog';
import { BiometricDemo } from './BiometricDemo';

export function SecurityDemo() {
  const { webApp, isInTelegram } = useTelegramWebApp();

  if (!isInTelegram) return null;

  const verifyData = () => {
    if (!webApp) return;

    const initData = webApp.initData;
    const initDataHash = webApp.initDataUnsafe.hash;
    
    // In a real app, you would send this to your backend for verification
    showAlert(`Init Data: ${initData}\nHash: ${initDataHash}`);
  };

  return (
    <div className="space-y-6">
      <Section title="Security Features" icon={Shield}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>Data Encryption:</span>
            {webApp?.isVersionAtLeast('6.1') ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span>Cloud Storage:</span>
            {webApp?.isVersionAtLeast('6.9') ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
          </div>

          <button
            onClick={verifyData}
            className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white"
          >
            Verify Init Data
          </button>
        </div>
      </Section>

      <BiometricDemo />
    </div>
  );
}