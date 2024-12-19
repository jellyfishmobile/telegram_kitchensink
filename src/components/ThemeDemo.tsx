import React from 'react';
import { Palette } from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';

export function ThemeDemo() {
  const { isDarkMode, webApp, isInTelegram } = useTelegramWebApp();
  
  if (!isInTelegram) return null;

  return (
    <section className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Palette className="w-5 h-5" />
        Theme Information
      </h2>
      {webApp && (
        <div className="space-y-2">
          <p><strong>Color Scheme:</strong> {webApp.colorScheme}</p>
          <p><strong>Theme Color:</strong> {webApp.themeParams.bg_color}</p>
          <p><strong>Text Color:</strong> {webApp.themeParams.text_color}</p>
          <p><strong>Hint Color:</strong> {webApp.themeParams.hint_color}</p>
          <p><strong>Link Color:</strong> {webApp.themeParams.link_color}</p>
          <p><strong>Button Color:</strong> {webApp.themeParams.button_color}</p>
          <p><strong>Button Text Color:</strong> {webApp.themeParams.button_text_color}</p>
        </div>
      )}
    </section>
  );
}