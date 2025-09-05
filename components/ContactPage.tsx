import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';

// Merged from Contact.tsx to resolve a potential module loading issue.
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value) {
      setErrors(prev => ({...prev, [name]: ''})); // Clear error when user starts typing
    }
  };

  const validateForm = (): boolean => {
    let formIsValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      formIsValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      formIsValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    setStatus('submitting');
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };
  
  return (
    <div className="bg-white dark:bg-zinc-900">
      <form 
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit} 
        noValidate
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-800 dark:text-zinc-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            ></textarea>
            {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>
        </div>
        <div className="mt-8 text-right">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed dark:focus:ring-offset-zinc-900"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
      
      {status === 'success' && (
        <div className="mt-4 text-center p-3 rounded-md bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm animate-fade-in">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 text-center p-3 rounded-md bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-sm animate-fade-in">
          Oops! Something went wrong. Please try again later.
        </div>
      )}
    </div>
  );
};

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
                <ContactForm />
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
