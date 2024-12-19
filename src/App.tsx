import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { NonTelegramMessage } from './components/NonTelegramMessage';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorMessage } from './components/common/ErrorMessage';
import { UserInfo } from './features/user/UserInfo';
import { ThemeDemo } from './features/theme/ThemeDemo';
import { PopupDemo } from './features/popup/PopupDemo';
import { HapticDemo } from './features/haptic/HapticDemo';
import { QRScanDemo } from './features/qr/QRScanDemo';
import { ViewportDemo } from './features/viewport/ViewportDemo';
import { SecurityDemo } from './features/security/SecurityDemo';
import { useTelegramWebApp } from './hooks/useTelegramWebApp';

function App() {
  const { isInitialized, isInTelegram, error } = useTelegramWebApp();

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!isInTelegram) {
    return <NonTelegramMessage />;
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <UserInfo />
        <SecurityDemo />
        <ThemeDemo />
        <PopupDemo />
        <HapticDemo />
        <QRScanDemo />
        <ViewportDemo />
      </div>
    </MainLayout>
  );
}

export default App;