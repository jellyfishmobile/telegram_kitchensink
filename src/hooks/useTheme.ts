import { useTelegramWebApp } from './useTelegramWebApp';
import { THEME } from '../constants/telegram';

export function useTheme() {
  const { isDarkMode } = useTelegramWebApp();
  const theme = isDarkMode ? THEME.DARK : THEME.LIGHT;

  return {
    theme,
    isDarkMode,
  };
}