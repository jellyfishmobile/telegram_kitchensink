import React from 'react';
import { User } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';

export function UserInfo() {
  const { webApp, isInTelegram } = useTelegramWebApp();
  const user = webApp?.initDataUnsafe?.user;

  if (!isInTelegram) return null;

  return (
    <Section title="User Information" icon={User}>
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
    </Section>
  );
}