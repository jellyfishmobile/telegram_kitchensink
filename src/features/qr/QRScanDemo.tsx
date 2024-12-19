import React, { useState } from 'react';
import { QrCode, CheckCircle, XCircle } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import { showAlert } from '../../utils/dialog';

export function QRScanDemo() {
  const { webApp, isInTelegram } = useTelegramWebApp();
  const [lastScannedCode, setLastScannedCode] = useState<string | null>(null);

  if (!isInTelegram) return null;

  const isQRScanSupported = webApp?.isVersionAtLeast('6.4');

  const handleScanQR = () => {
    if (!webApp || !isQRScanSupported) {
      showAlert('QR scanning requires Telegram version 6.4 or higher');
      return;
    }

    webApp.showScanQrPopup({
      text: 'Please scan a QR code',
    }, (text) => {
      if (text) {
        setLastScannedCode(text);
        showAlert(`Scanned QR code: ${text}`);
      }
    });
  };

  return (
    <Section title="QR Scanner" icon={QrCode}>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span>QR Scanning Support:</span>
          {isQRScanSupported ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
        </div>

        {lastScannedCode && (
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <p className="font-mono text-sm break-all">
              Last scanned: {lastScannedCode}
            </p>
          </div>
        )}

        <button
          onClick={handleScanQR}
          disabled={!isQRScanSupported}
          className={`px-4 py-2 rounded-md text-white ${
            isQRScanSupported
              ? 'bg-indigo-500 hover:bg-indigo-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Scan QR Code
        </button>
      </div>
    </Section>
  );
}