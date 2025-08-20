import { useEffect } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  type?: 'success' | 'error' | 'info';
}

export default function Toast({ message, show, onClose, type = 'info' }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  let color = 'bg-blue-500';
  if (type === 'success') color = 'bg-green-500';
  if (type === 'error') color = 'bg-red-500';

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-xl shadow-xl text-white font-bold text-base animate-fadeInUp ${color}`}
      role="alert"
      style={{ minWidth: 220 }}
    >
      {message}
    </div>
  );
}
