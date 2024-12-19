import React from 'react';
import { Bell } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';

export function HapticDemo() {
  const { isInTelegram } = useTelegramWebApp();
  const haptic = useHapticFeedback();

  if (!isInTelegram) return null;

  return (
    <Section title="Haptic Feedback" icon={Bell}>
      <div className="space-y-4">
        <div className="space-x-2">
          <button
            onClick={() => haptic.impactOccurred('light')}
            className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Light
          </button>
          <button
            onClick={() => haptic.impactOccurred('medium')}
            className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Medium
          </button>
          <button
            onClick={() => haptic.impactOccurred('heavy')}
            className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Heavy
          </button>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => haptic.notificationOccurred('success')}
            className="px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 text-white"
          >
            Success
          </button>
          <button
            onClick={() => haptic.notificationOccurred('warning')}
            className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            Warning
          </button>
          <button
            onClick={() => haptic.notificationOccurred('error')}
            className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white"
          >
            Error
          </button>
        </div>
        <button
          onClick={haptic.selectionChanged}
          className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
        >
          Selection Changed
        </button>
      </div>
    </Section>
  );
}