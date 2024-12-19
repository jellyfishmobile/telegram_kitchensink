import { getWebApp } from './telegram';

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

export const isViewportExpanded = () => {
  const webApp = getWebApp();
  return webApp?.isExpanded ?? false;
};