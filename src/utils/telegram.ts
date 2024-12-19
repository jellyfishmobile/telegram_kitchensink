import { WebApp } from '@twa-dev/sdk';

export const isTelegramWebApp = () => {
  try {
    return Boolean(window.Telegram?.WebApp);
  } catch {
    return false;
  }
};

export const getWebApp = () => {
  if (isTelegramWebApp()) {
    return WebApp;
  }
  return null;
};

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

export const expandViewport = () => {
  const webApp = getWebApp();
  if (webApp) {
    try {
      webApp.expand();
    } catch (error) {
      console.error('Failed to expand viewport:', error);
    }
  }
};