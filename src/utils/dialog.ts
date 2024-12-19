import { getWebApp } from './telegram';

interface PopupButton {
  id: string;
  type: 'ok' | 'cancel' | 'default';
  text: string;
}

interface PopupParams {
  title: string;
  message: string;
  buttons: PopupButton[];
}

export const showAlert = (message: string) => {
  const webApp = getWebApp();
  if (webApp) {
    try {
      webApp.showAlert(message);
    } catch (error) {
      console.error('Failed to show Telegram alert:', error);
      alert(message);
    }
  } else {
    alert(message);
  }
};

export const showConfirm = (message: string, callback: (confirmed: boolean) => void) => {
  const webApp = getWebApp();
  if (webApp) {
    try {
      webApp.showConfirm(message, callback);
    } catch (error) {
      console.error('Failed to show Telegram confirm:', error);
      const confirmed = window.confirm(message);
      callback(confirmed);
    }
  } else {
    const confirmed = window.confirm(message);
    callback(confirmed);
  }
};

export const showPopup = (params: PopupParams, callback: (buttonId: string) => void) => {
  const webApp = getWebApp();
  if (webApp) {
    try {
      webApp.showPopup(params, callback);
    } catch (error) {
      console.error('Failed to show Telegram popup:', error);
      // Fallback to confirm dialog for non-Telegram environment
      const confirmed = window.confirm(params.message);
      callback(confirmed ? 'ok' : 'cancel');
    }
  } else {
    const confirmed = window.confirm(params.message);
    callback(confirmed ? 'ok' : 'cancel');
  }
};