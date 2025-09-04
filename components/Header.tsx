import React, { useState, useEffect } from 'react';
import type { ActiveSection, Theme } from '@/types';
import { SunIcon, MoonIcon, ShareIcon, MenuIcon, CloseIcon } from '@/components/Icons';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavClick: (section: ActiveSection) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const NavItem: React.FC<{
  section: ActiveSection;
  label: string;
  activeSection: ActiveSection;
  onClick: (section: ActiveSection) => void;
  isMobile?: boolean;
}> = ({ section, label, activeSection, onClick, isMobile = false }) => {
  const isActive = section === activeSection;
  const baseClasses = 'transition-colors duration-300';
  const activeClasses = 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300';
  const inactiveClasses = 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100';

  const mobileClasses = `w-full text-center block px-4 py-3 text-lg font-medium ${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  const desktopClasses = `px-3 py-2 rounded-md text-sm font-medium ${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <li>
      <button onClick={() => onClick(section)} className={isMobile ? mobileClasses : desktopClasses}>
        {label}
      </button>
    </li>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick, theme, toggleTheme }) => {
  const [showCopied, setShowCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canonicalUrl = 'https://my-modern-resume.netlify.app/';

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (section: ActiveSection) => {
    onNavClick(section);
    setIsMenuOpen(false);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Alejandro Ubilla - My Modern Resume',
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
  
  const navItems = [
    { section: 'summary' as ActiveSection, label: 'About' },
    { section: 'projects' as ActiveSection, label: 'Projects' },
    { section: 'resume' as ActiveSection, label: 'Resume' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Alejandro Ubilla</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <nav className="hidden lg:block">
                <ul className="flex items-center space-x-1 lg:space-x-2">
                  {navItems.map(item => (
                    <NavItem key={item.section} {...item} activeSection={activeSection} onClick={handleNavClick} />
                  ))}
                </ul>
              </nav>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
              </button>
              <div className="relative">
                  <button
                      onClick={handleShare}
                      className="p-2 rounded-full text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
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
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg lg:hidden animate-fade-in" id="mobile-menu">
          <div className="pt-2 pb-3">
            <ul>
              {navItems.map(item => (
                <NavItem key={item.section} {...item} activeSection={activeSection} onClick={handleNavClick} isMobile />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;