import React from 'react';
import { Header } from './Header';
import { useTheme } from '../../hooks/useTheme';
import { MainButton } from '../buttons/MainButton';
import { BackButton } from '../buttons/BackButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.BG} ${theme.TEXT}`}>
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        {children}
      </main>
      <MainButton />
      <BackButton />
    </div>
  );
}