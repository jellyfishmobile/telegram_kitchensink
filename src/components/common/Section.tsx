import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function Section({ title, icon: Icon, children }: SectionProps) {
  const { theme } = useTheme();
  
  return (
    <section className={`p-4 rounded-lg ${theme.SECTION} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </h2>
      {children}
    </section>
  );
}