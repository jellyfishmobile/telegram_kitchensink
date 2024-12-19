import React, { useEffect } from 'react';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import { showConfirm } from '../../utils/dialog';

export function BackButton() {
  const { webApp } = useTelegramWebApp();

  useEffect(() => {
    if (!webApp) return;

    const handleClick = () => {
      showConfirm('Do you want to go back?', (confirmed) => {
        if (confirmed) {
          webApp.close();
        }
      });
    };

    webApp.BackButton.onClick(handleClick);

    return () => {
      webApp.BackButton.offClick(handleClick);
    };
  }, [webApp]);

  return null;
}