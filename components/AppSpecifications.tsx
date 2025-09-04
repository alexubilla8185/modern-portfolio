import React from 'react';

const SpecSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h3>
    <div className="text-slate-600 dark:text-zinc-400 space-y-1">{children}</div>
  </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="mr-2 mt-1 text-indigo-500">&#10148;</span>
        <span>{children}</span>
    </li>
);

const AppSpecifications: React.FC = () => {
  return (
    <div className="text-sm">
        <SpecSection title="Architecture">
            <p>A modern Single Page Application (SPA) built without a traditional framework bundler, using an `importmap` for ES module resolution directly in the browser.</p>
        </SpecSection>
        
        <SpecSection title="Core Stack">
            <ul className="space-y-2">
                <ListItem><strong>React 18:</strong> For building the user interface with components.</ListItem>
                <ListItem><strong>TypeScript:</strong> For static typing, improving code quality and maintainability.</ListItem>
                <ListItem><strong>Tailwind CSS (CDN):</strong> A utility-first CSS framework for rapid UI development and styling.</ListItem>
            </ul>
        </SpecSection>

        <SpecSection title="Key Features">
            <ul className="space-y-2">
                <ListItem><strong>Fully Responsive Design:</strong> Adapts seamlessly to all screen sizes, from mobile to desktop.</ListItem>
                <ListItem><strong>Light/Dark Theme:</strong> User-selectable theme with system preference detection and localStorage persistence.</ListItem>
                <ListItem><strong>Simulated AI Assistant:</strong> A fully client-side chatbot that demonstrates UI/UX for conversational interfaces using pre-scripted responses to mimic a live AI.</ListItem>
                <ListItem><strong>Static Project Data:</strong> Project data is imported directly as a JavaScript module, ensuring it's bundled with the app for fast, reliable loading.</ListItem>
                <ListItem><strong>Interactive Easter Egg:</strong> This modal! Triggered by a triple-click on the profile picture.</ListItem>
                <ListItem><strong>Dynamic Resume Download:</strong> Generates a Markdown file of the resume on-the-fly.</ListItem>
            </ul>
        </SpecSection>

        <SpecSection title="Styling & Assets">
             <ul className="space-y-2">
                <ListItem><strong>Google Fonts:</strong> Uses the 'Inter' font family for clean and readable typography.</ListItem>
                <ListItem><strong>Custom SVG Icons:</strong> For crisp, consistent iconography across the application.</ListItem>
                 <ListItem><strong>Dynamic Gradients:</strong> Each project card features a unique, dynamically generated gradient background, providing a visually consistent and professional look.</ListItem>
            </ul>
        </SpecSection>

         <SpecSection title="Hosting">
             <p>Hosted on <strong>Netlify</strong> for continuous deployment, global CDN, and high performance.</p>
        </SpecSection>
    </div>
  );
};

export default AppSpecifications;