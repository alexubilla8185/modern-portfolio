import React, { useEffect } from 'react';
import { CloseIcon } from '@/components/Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'default' | 'fullscreen';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'default' }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  
  const baseDialogClasses = "relative bg-white dark:bg-zinc-900 shadow-xl flex flex-col animate-fade-in";
  
  const sizeClasses = {
    default: "w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[90vh] rounded-lg mx-4",
    fullscreen: "w-screen h-screen sm:w-[95vw] sm:h-[95vh] sm:max-w-5xl sm:rounded-lg"
  };

  const contentPaddingClass = size === 'default' ? 'p-6' : 'p-0';


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={`${baseDialogClasses} ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-start justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
          <h2 id="modal-title" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="-mt-1 -mr-2 p-1 rounded-full text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <div className={`flex-grow overflow-y-auto ${contentPaddingClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;