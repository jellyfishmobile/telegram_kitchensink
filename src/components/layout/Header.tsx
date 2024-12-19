import React from 'react';
import { Settings } from 'lucide-react';
import { ThemeToggle } from '../../features/theme/ThemeToggle';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { theme } = useTheme();

  return (
    <header className={`sticky top-0 z-10 ${theme.HEADER} shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Telegram Mini App Demo
          </h1>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}