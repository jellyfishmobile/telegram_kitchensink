import { WebApp } from '@twa-dev/sdk';

export interface TelegramWebAppState {
  isDarkMode: boolean;
  isExpanded: boolean;
  isInitialized: boolean;
  isInTelegram: boolean;
  webApp: typeof WebApp | null;
  error: string | null;
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

export type HapticStyle = 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
export type NotificationType = 'error' | 'success' | 'warning';