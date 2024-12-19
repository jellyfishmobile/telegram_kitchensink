import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { WebApp } from '@twa-dev/sdk';

export function ThemeToggle() {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={() => WebApp.toggleMainButton()}
      className={`p-2 rounded-full ${
        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
      }`}
    >
      {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}