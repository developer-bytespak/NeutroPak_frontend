'use client';

import React, { useState, useEffect } from 'react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

interface ToastItemProps extends ToastProps {
  onClose: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ id, type, message, duration = 5000, onClose }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => onClose(id), duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const bgColor = {
    success: 'bg-green-50 border-green-300',
    error: 'bg-red-50 border-red-300',
    info: 'bg-blue-50 border-blue-300',
    warning: 'bg-yellow-50 border-yellow-300',
  }[type];

  const textColor = {
    success: 'text-green-700',
    error: 'text-red-700',
    info: 'text-blue-700',
    warning: 'text-yellow-700',
  }[type];

  const borderColor = {
    success: 'border-green-300',
    error: 'border-red-300',
    info: 'border-blue-300',
    warning: 'border-yellow-300',
  }[type];

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  }[type];

  return (
    <div className={`border-l-4 ${borderColor} ${bgColor} p-4 rounded-lg shadow-lg flex items-start gap-3 animate-slideIn max-w-md`}>
      <span className={`text-lg font-bold ${textColor}`}>{icon}</span>
      <div className="flex-1">
        <p className={`text-sm font-medium ${textColor}`}>{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className={`font-bold ${textColor} hover:opacity-70 transition-opacity`}
      >
        ✕
      </button>
    </div>
  );
};

export const Toast: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // Expose methods via window for global access
  React.useEffect(() => {
    (window as any).showToast = (type: string, message: string, duration?: number) => {
      const id = Date.now().toString();
      setToasts((prev) => [...prev, { id, type: type as any, message, duration }]);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
      {/* Backdrop with blur */}
      {toasts.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />
      )}
      {/* Centered toast container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="space-y-3 pointer-events-auto">
          {toasts.map((toast) => (
            <div key={toast.id}>
              <ToastItem {...toast} onClose={removeToast} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Custom hook for easier usage
export const useToast = () => {
  const showToast = (type: 'success' | 'error' | 'info' | 'warning', message: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).showToast) {
      (window as any).showToast(type, message, duration);
    }
  };

  return {
    success: (message: string, duration?: number) => showToast('success', message, duration),
    error: (message: string, duration?: number) => showToast('error', message, duration),
    info: (message: string, duration?: number) => showToast('info', message, duration),
    warning: (message: string, duration?: number) => showToast('warning', message, duration),
  };
};
