import { useTelegramWebApp } from './useTelegramWebApp';
import type { HapticStyle, NotificationType } from '../types/telegram';

export function useHapticFeedback() {
  const { webApp } = useTelegramWebApp();

  return {
    impactOccurred: (style: HapticStyle) => {
      webApp?.HapticFeedback.impactOccurred(style);
    },
    notificationOccurred: (type: NotificationType) => {
      webApp?.HapticFeedback.notificationOccurred(type);
    },
    selectionChanged: () => {
      webApp?.HapticFeedback.selectionChanged();
    },
  };
}