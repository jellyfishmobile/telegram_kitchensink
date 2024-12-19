import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';
import { showAlert, showConfirm } from '../utils/telegram';

export function PopupDemo() {
  const { isDarkMode, webApp, isInTelegram } = useTelegramWebApp();

  if (!isInTelegram) return null;

  const handleShowAlert = () => {
    showAlert('This is a simple alert message!');
  };

  const handleShowConfirm = () => {
    showConfirm('Are you sure you want to proceed?', (confirmed) => {
      showAlert(confirmed ? 'You confirmed!' : 'You cancelled!');
    });
  };

  const handleShowPopup = () => {
    webApp?.showPopup({
      title: 'Custom Popup',
      message: 'This is a custom popup with multiple buttons',
      buttons: [
        { id: 'ok', type: 'ok', text: 'OK' },
        { id: 'cancel', type: 'cancel', text: 'Cancel' },
        { id: 'custom', type: 'default', text: 'Custom Action' },
      ],
    }, (buttonId) => {
      showAlert(`You clicked: ${buttonId}`);
    });
  };

  return (
    <section className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        Popup Demos
      </h2>
      <div className="space-x-4">
        <button
          onClick={handleShowAlert}
          className={`px-4 py-2 rounded-md ${
            isDarkMode
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          Show Alert
        </button>
        <button
          onClick={handleShowConfirm}
          className={`px-4 py-2 rounded-md ${
            isDarkMode
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          Show Confirm
        </button>
        <button
          onClick={handleShowPopup}
          className={`px-4 py-2 rounded-md ${
            isDarkMode
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-purple-500 hover:bg-purple-600'
          } text-white`}
        >
          Show Popup
        </button>
      </div>
    </section>
  );
}