import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

export function NonTelegramMessage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          <div className="flex justify-center">
            <MessageCircle className="w-16 h-16 text-blue-500" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Telegram Mini App Demo
            </h1>
            
            <p className="text-gray-600">
              This app is designed to work exclusively inside Telegram. Please open it using the Telegram app to access all features.
            </p>
          </div>

          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Open in Telegram
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Don't have Telegram yet? 
              <a 
                href="https://telegram.org/apps" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 ml-1"
              >
                Download it here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}