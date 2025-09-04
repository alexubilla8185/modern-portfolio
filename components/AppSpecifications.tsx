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
            <ul className="space-y-2">
                <ListItem><strong>Modern SPA without Bundler:</strong> Built as a Single Page Application using an `importmap` for native ES module resolution, avoiding complex build steps for a lightweight setup.</ListItem>
                <ListItem><strong>Custom SPA Routing:</strong> A client-side router managed by React state (`useState`) handles view changes between 'Projects' and 'Resume' without page reloads.</ListItem>
                <ListItem><strong>Lazy Loading:</strong> The contact form component is lazy-loaded using `React.lazy()` and `Suspense` to improve initial page load performance.</ListItem>
            </ul>
        </SpecSection>
        
        <SpecSection title="Core Stack">
            <ul className="space-y-2">
                <ListItem><strong>React 19:</strong> Leveraging the latest React features for building a component-based UI.</ListItem>
                <ListItem><strong>TypeScript:</strong> For static typing, ensuring code quality, maintainability, and a better developer experience.</ListItem>
                <ListItem><strong>Tailwind CSS (CDN):</strong> A utility-first CSS framework for rapid UI development, configured via a script tag for simplicity.</ListItem>
            </ul>
        </SpecSection>

        <SpecSection title="Animation & Interactivity">
            <ul className="space-y-2">
                <ListItem><strong>Framer Motion:</strong> Powers the interactive 3D project carousel, using spring physics for fluid, tactile animations.</ListItem>
                <ListItem><strong>Custom CSS Animations:</strong> A performance-optimized CSS `marquee` animation creates the seamless, auto-scrolling effect for the Core Competencies.</ListItem>
                <ListItem><strong>Stateful UI:</strong> The app features a persistent light/dark theme, interactive modals, and a simulated AI chatbot, all managed with React state and hooks.</ListItem>
            </ul>
        </SpecSection>

        <SpecSection title="Key Features">
            <ul className="space-y-2">
                <ListItem><strong>Fully Responsive Design:</strong> Adapts seamlessly to all screen sizes, from mobile to desktop.</ListItem>
                <ListItem><strong>Interactive 3D Carousel:</strong> Users can navigate projects by clicking side cards, using arrow buttons, or with keyboard controls.</ListItem>
                <ListItem><strong>Simulated AI Assistant:</strong> A client-side chatbot demonstrates UI/UX for conversational interfaces with pre-scripted, streaming responses.</ListItem>
                <ListItem><strong>Static Project Data:</strong> Project data is imported directly as a JavaScript module for fast, reliable loading without network requests.</ListItem>
                <ListItem><strong>Dynamic Resume Download:</strong> Generates a Markdown file of the resume on-the-fly for easy sharing.</ListItem>
            </ul>
        </SpecSection>

        <SpecSection title="Styling & Assets">
             <ul className="space-y-2">
                <ListItem><strong>Google Fonts:</strong> Uses the 'Inter' font family for clean, modern typography.</ListItem>
                <ListItem><strong>Custom SVG Icons:</strong> A dedicated component provides crisp, consistent iconography across the application.</ListItem>
                <ListItem><strong>Dynamic Gradients:</strong> Project cards feature unique, algorithmically assigned gradients for a vibrant and professional look.</ListItem>
            </ul>
        </SpecSection>

         <SpecSection title="Hosting & Deployment">
             <p>Hosted on <strong>Netlify</strong> for continuous deployment from a GitHub repository, providing a global CDN, and high performance out-of-the-box.</p>
        </SpecSection>
    </div>
  );
};

export default AppSpecifications;