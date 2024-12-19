import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto" />
        <h1 className="text-xl font-bold">Initialization Error</h1>
        <p className="text-gray-600">{error}</p>
        <p className="text-sm text-gray-500">
          Try opening this app in Telegram or check your connection.
        </p>
      </div>
    </div>
  );
}