import React from 'react';
import { Palette } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';

export function ThemeDemo() {
  const { webApp, isInTelegram } = useTelegramWebApp();
  
  if (!isInTelegram) return null;

  return (
    <Section title="Theme Information" icon={Palette}>
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
    </Section>
  );
}