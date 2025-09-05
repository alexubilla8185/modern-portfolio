import React, { useState } from 'react';
import type { Theme } from '@/types';
import { SunIcon, MoonIcon, ShareIcon } from '@/components/Icons';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [showCopied, setShowCopied] = useState(false);
  const canonicalUrl = 'https://my-modern-resume.netlify.app/';

  const handleShare = async () => {
    const shareData = {
      title: 'Alejandro Ubilla - Portfolio',
      text: "Check out Alejandro Ubilla's portfolio!",
      url: canonicalUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(canonicalUrl);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (err)
        {
        console.error('Failed to copy link:', err);
        alert('Failed to copy link.');
      }
    }
  };
  
  return (
    <header 
      className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Alejandro Ubilla</h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ${
                theme === 'light'
                  ? 'text-blue-600' // Blue moon icon for light mode
                  : 'text-yellow-400' // Yellow sun icon for dark mode
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
            <div className="relative">
                <button
                    onClick={handleShare}
                    className="p-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                    aria-label="Share profile"
                >
                    <ShareIcon className="h-6 w-6" />
                </button>
                {showCopied && (
                    <div className="absolute top-full right-0 mt-2 bg-zinc-800 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-lg animate-fade-in">
                        Link Copied!
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;