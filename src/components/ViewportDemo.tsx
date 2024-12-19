import React from 'react';
import { Share2 } from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';
import { expandViewport } from '../utils/telegram';

export function ViewportDemo() {
  const { isDarkMode, isExpanded, isInTelegram } = useTelegramWebApp();

  if (!isInTelegram) return null;

  return (
    <section className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Share2 className="w-5 h-5" />
        Viewport Status
      </h2>
      <p>Current viewport state: {isExpanded ? 'Expanded' : 'Normal'}</p>
      <button
        onClick={expandViewport}
        className={`mt-4 px-4 py-2 rounded-md ${
          isDarkMode
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white`}
      >
        Expand Viewport
      </button>
    </section>
  );
}