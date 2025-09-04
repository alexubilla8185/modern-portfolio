import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '@/components/Icons';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 8000); // Auto-dismiss after 8 seconds

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md p-2"
                    role="alert"
                >
                    <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-lg shadow-xl border border-slate-200 dark:border-zinc-700">
                        <p className="text-sm font-medium text-slate-700 dark:text-zinc-200">{message}</p>
                        <button
                            onClick={onClose}
                            className="ml-4 p-1 rounded-full text-slate-400 hover:bg-slate-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-label="Dismiss notification"
                        >
                            <CloseIcon className="h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;