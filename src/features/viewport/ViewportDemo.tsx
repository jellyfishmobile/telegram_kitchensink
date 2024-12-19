import React from 'react';
import { Share2 } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import { expandViewport } from '../../utils/viewport';

export function ViewportDemo() {
  const { isExpanded, isInTelegram } = useTelegramWebApp();

  if (!isInTelegram) return null;

  return (
    <Section title="Viewport Status" icon={Share2}>
      <p>Current viewport state: {isExpanded ? 'Expanded' : 'Normal'}</p>
      <button
        onClick={expandViewport}
        className="mt-4 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
      >
        Expand Viewport
      </button>
    </Section>
  );
}