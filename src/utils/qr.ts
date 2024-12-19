import { getWebApp } from './telegram';
import { MIN_VERSION_QR_SCAN } from '../constants/telegram';
import { showAlert } from './dialog';

interface QRScanOptions {
  text?: string;
  onScan: (text: string) => void;
}

export const scanQR = ({ text = 'Please scan a QR code', onScan }: QRScanOptions) => {
  const webApp = getWebApp();
  
  if (!webApp) {
    showAlert('QR scanning is only available in Telegram');
    return;
  }

  if (!webApp.isVersionAtLeast(MIN_VERSION_QR_SCAN)) {
    showAlert(`QR scanning requires Telegram version ${MIN_VERSION_QR_SCAN} or higher`);
    return;
  }

  webApp.showScanQrPopup({ text }, (result) => {
    if (result) {
      onScan(result);
    }
  });
};