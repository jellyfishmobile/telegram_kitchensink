import React from 'react';
import { User } from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';

export function UserInfo() {
  const { isDarkMode, webApp, isInTelegram } = useTelegramWebApp();
  const user = webApp?.initDataUnsafe?.user;

  if (!isInTelegram) return null;

  return (
    <section className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <User className="w-5 h-5" />
        User Information
      </h2>
      {user ? (
        <div className="space-y-2">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>First Name:</strong> {user.first_name}</p>
          {user.last_name && <p><strong>Last Name:</strong> {user.last_name}</p>}
          {user.username && <p><strong>Username:</strong> @{user.username}</p>}
          <p><strong>Language Code:</strong> {user.language_code}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </section>
  );
}