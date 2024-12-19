import React from 'react';
import { QrCode } from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';
import { showAlert } from '../utils/telegram';

export function QRScanDemo() {
  const { isDarkMode, webApp, isInTelegram } = useTelegramWebApp();

  if (!isInTelegram) return null;

  const scanQR = () => {
    if (webApp?.isVersionAtLeast('6.4')) {
      webApp.showScanQrPopup({
        text: 'Please scan a QR code',
      }, (text) => {
        if (text) {
          showAlert(`Scanned QR code: ${text}`);
        }
      });
    } else {
      showAlert('QR scanning requires Telegram version 6.4 or higher');
    }
  };

  return (
    <section className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <QrCode className="w-5 h-5" />
        QR Scanner
      </h2>
      <button
        onClick={scanQR}
        className={`px-4 py-2 rounded-md ${
          isDarkMode
            ? 'bg-indigo-600 hover:bg-indigo-700'
            : 'bg-indigo-500 hover:bg-indigo-600'
        } text-white`}
      >
        Scan QR Code
      </button>
    </section>
  );
}