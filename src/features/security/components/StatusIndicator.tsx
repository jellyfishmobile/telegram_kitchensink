import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface StatusIndicatorProps {
  label: string;
  isActive: boolean;
}

export function StatusIndicator({ label, isActive }: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <span>{label}</span>
      {isActive ? (
        <CheckCircle className="w-5 h-5 text-green-500" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500" />
      )}
    </div>
  );
}