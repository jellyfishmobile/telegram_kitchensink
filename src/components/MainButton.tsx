import React, { useEffect, useState } from 'react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';
import { showAlert } from '../utils/telegram';

export function MainButton() {
  const { webApp } = useTelegramWebApp();
  const [text, setText] = useState('Click Me!');
  const [color, setColor] = useState('#2AABEE');

  useEffect(() => {
    if (!webApp) return;

    webApp.MainButton.setText(text);
    webApp.MainButton.setParams({
      color,
      text_color: '#ffffff',
    });

    const handleClick = () => {
      showAlert('Main Button clicked!');
    };

    webApp.MainButton.onClick(handleClick);

    return () => {
      webApp.MainButton.offClick(handleClick);
    };
  }, [text, color, webApp]);

  return null;
}