import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Section } from '../../components/common/Section';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import { showAlert, showConfirm, showPopup } from '../../utils/dialog';

export function PopupDemo() {
  const { webApp, isInTelegram } = useTelegramWebApp();

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
    showPopup({
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
    <Section title="Popup Demos" icon={MessageSquare}>
      <div className="space-x-4">
        <button
          onClick={handleShowAlert}
          className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
        >
          Show Alert
        </button>
        <button
          onClick={handleShowConfirm}
          className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white"
        >
          Show Confirm
        </button>
        <button
          onClick={handleShowPopup}
          className="px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white"
        >
          Show Popup
        </button>
      </div>
    </Section>
  );
}