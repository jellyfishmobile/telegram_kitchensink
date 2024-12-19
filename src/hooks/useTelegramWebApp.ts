import { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: typeof WebApp;
    };
  }
}

export interface TelegramWebAppState {
  isDarkMode: boolean;
  isExpanded: boolean;
  isInitialized: boolean;
  isInTelegram: boolean;
  webApp: typeof WebApp | null;
  error: string | null;
}

export function useTelegramWebApp(): TelegramWebAppState {
  const [state, setState] = useState<TelegramWebAppState>({
    isDarkMode: false,
    isExpanded: false,
    isInitialized: false,
    isInTelegram: false,
    webApp: null,
    error: null,
  });

  useEffect(() => {
    const initializeWebApp = async () => {
      try {
        // Wait for Telegram script to load
        if (typeof window.Telegram?.WebApp === 'undefined') {
          setState(prev => ({
            ...prev,
            isInitialized: true,
            isInTelegram: false,
            error: null,
          }));
          return;
        }

        const webApp = window.Telegram.WebApp;
        
        // Initialize WebApp
        webApp.ready();
        webApp.enableClosingConfirmation();

        // Set initial state
        setState({
          isDarkMode: webApp.colorScheme === 'dark',
          isExpanded: webApp.isExpanded,
          isInitialized: true,
          isInTelegram: true,
          webApp,
          error: null,
        });

        // Listen for theme changes
        const handleThemeChange = () => {
          setState(prev => ({
            ...prev,
            isDarkMode: webApp.colorScheme === 'dark',
          }));
        };

        // Listen for viewport changes
        const handleViewportChange = () => {
          setState(prev => ({
            ...prev,
            isExpanded: webApp.isExpanded,
          }));
        };

        webApp.onEvent('themeChanged', handleThemeChange);
        webApp.onEvent('viewportChanged', handleViewportChange);

        return () => {
          webApp.offEvent('themeChanged', handleThemeChange);
          webApp.offEvent('viewportChanged', handleViewportChange);
        };
      } catch (error) {
        console.error('Failed to initialize Telegram Web App:', error);
        setState(prev => ({
          ...prev,
          isInitialized: true,
          error: 'Failed to initialize Telegram Web App',
        }));
      }
    };

    initializeWebApp();
  }, []);

  return state;
}