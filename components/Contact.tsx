import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, you would send the data to a backend service here.
    // For this demo, we'll just simulate success.
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
    <section className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Get In Touch</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                className="block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                className="block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="mt-8 text-right">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed dark:focus:ring-offset-slate-800"
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
    </section>
  );
};

export default Contact;