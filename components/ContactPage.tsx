import React from 'react';
import Contact from '@/components/Contact';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';

const ContactPage: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-400">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Form */}
        <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200 mb-4 text-center">Direct Message</h3>
            <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
                <Contact />
            </div>
        </div>
        
        {/* Socials */}
        <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200 mb-4 text-center">Connect With Me</h3>
            <div className="flex items-center justify-center space-x-8">
                <a href="https://github.com/alexubilla8185" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-zinc-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors duration-300 font-semibold" aria-label="GitHub Profile">
                    <GitHubIcon className="h-8 w-8" />
                    <span className="text-lg">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/alejandro-u-b34058342/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-zinc-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors duration-300 font-semibold" aria-label="LinkedIn Profile">
                    <LinkedInIcon className="h-8 w-8" />
                    <span className="text-lg">LinkedIn</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;