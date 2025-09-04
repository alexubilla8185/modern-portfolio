import React, { useState } from 'react';

const Contact: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, you would send the data to a backend service here.
    console.log('Form data submitted:', formData);

    // Simulate a random success/error for demonstration
    if (Math.random() > 0.1) { // 90% success rate
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
    } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
    }
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-lg text-slate-600 dark:text-zinc-400">
          Have a question or want to work together? Fill out the form below.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-zinc-900">
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
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
                className="block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded-md shadow-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
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
                className="block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded-md shadow-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded-md shadow-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed dark:focus:ring-offset-zinc-900"
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
    </div>
  );
};

export default Contact;