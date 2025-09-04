import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage } from '@/types';

const getSimulatedResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hi there! I'm a simulated assistant for Alejandro's portfolio. How can I help you learn more about his work?";
    }
    if (lowerInput.includes('project')) {
        return `Alejandro has worked on a variety of projects, including 'My Modern Resume', 'AfterLife (Alpha)', and 'DarkChat'. He uses technologies like React, TypeScript, and AI APIs. Do you want to know more about a specific one?`;
    }
    if (lowerInput.includes('skill') || lowerInput.includes('experience') || lowerInput.includes('resume')) {
        return `Alejandro is a Technology Leader with over 15 years of experience. His skills include Product Management, Agile Methodologies, UI/UX, Web & Mobile Development, and AI integration. He's held roles like Founder & CEO at TEKGUYZ and Technical Project Manager at Q Link Wireless.`;
    }
    if (lowerInput.includes('contact')) {
        return "The best way to contact Alejandro is by using the 'Contact' button in the action bar at the bottom-right of the screen. It will open up a form for you to send him a message directly.";
    }
    if (lowerInput.includes('thank')) {
        return "You're welcome! Let me know if there's anything else I can help with.";
    }
    // Default response
    return "That's a great question! While I'm just a simulated assistant designed to showcase UI, I can tell you that Alejandro's portfolio highlights his expertise in modern web development. Try asking about his 'projects' or 'skills'.";
};


const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: "Hello! I'm a simulated AI assistant for Alejandro's portfolio. You can ask me about his skills, experience, or projects to see how a real AI chat could work." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);
    
    const streamResponse = async (text: string) => {
        // Add an empty message bubble for the model's response
        setMessages(prev => [...prev, { role: 'model', text: '' }]);
        
        const words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay between words
            setMessages(prev => {
                const newMessages = [...prev];
                const lastMessage = newMessages[newMessages.length - 1];
                // Append the next word
                lastMessage.text = words.slice(0, i + 1).join(' ');
                return newMessages;
            });
        }
    };


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        
        const responseText = getSimulatedResponse(input);
        
        // Simulate thinking delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await streamResponse(responseText);

        setIsLoading(false);
    };

    return (
        <div className="flex flex-col h-[65vh]">
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-slate-200 dark:bg-zinc-700 text-slate-800 dark:text-zinc-200'}`}>
                           {msg.text || <span className="breathing-dot"></span>}
                        </div>
                    </div>
                ))}
                 {isLoading && messages[messages.length -1].role === 'user' && (
                    <div className="flex justify-start pt-4">
                         <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl bg-slate-200 dark:bg-zinc-700">
                            <div className="flex items-center justify-center space-x-1">
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-zinc-700">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my projects..."
                        disabled={isLoading}
                        className="flex-grow block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-600 rounded-full shadow-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed dark:focus:ring-offset-zinc-900"
                        aria-label="Send message"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;