import React from 'react';
import { Bell } from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';

export function HapticDemo() {
  const { isDarkMode, webApp, isInTelegram } = useTelegramWebApp();

  if (!isInTelegram) return null;

  const impactOccurred = (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => {
    webApp?.HapticFeedback.impactOccurred(style);
  };

  const notificationOccurred = (type: 'error' | 'success' | 'warning') => {
    webApp?.HapticFeedback.notificationOccurred(type);
  };

  const selectionChanged = () => {
    webApp?.HapticFeedback.selectionChanged();
  };

  return (
    <section className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Bell className="w-5 h-5" />
        Haptic Feedback
      </h2>
      <div className="space-y-4">
        <div className="space-x-2">
          <button
            onClick={() => impactOccurred('light')}
            className={`px-3 py-1 rounded-md ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => impactOccurred('medium')}
            className={`px-3 py-1 rounded-md ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => impactOccurred('heavy')}
            className={`px-3 py-1 rounded-md ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            Heavy
          </button>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => notificationOccurred('success')}
            className="px-3 py-1 rounded-md bg-green-500 text-white"
          >
            Success
          </button>
          <button
            onClick={() => notificationOccurred('warning')}
            className="px-3 py-1 rounded-md bg-yellow-500 text-white"
          >
            Warning
          </button>
          <button
            onClick={() => notificationOccurred('error')}
            className="px-3 py-1 rounded-md bg-red-500 text-white"
          >
            Error
          </button>
        </div>
        <button
          onClick={selectionChanged}
          className={`px-3 py-1 rounded-md ${
            isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
          } text-white`}
        >
          Selection Changed
        </button>
      </div>
    </section>
  );
}