import React from 'react';

const SpecSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="break-inside-avoid">
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
    <div className="text-zinc-700 dark:text-zinc-400 space-y-1">{children}</div>
  </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="mr-2 mt-1 text-blue-500 flex-shrink-0">&#10148;</span>
        <span className="min-w-0">{children}</span>
    </li>
);

const AppSpecifications: React.FC = () => {
  return (
    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 break-words">
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
                <ListItem><strong>Framer Motion:</strong> Powers the interactive 3D project carousel and toast notifications, using spring physics for fluid, tactile animations.</ListItem>
                <ListItem><strong>Custom CSS Animations:</strong> A performance-optimized CSS `marquee` animation creates the seamless, auto-scrolling effect for the Core Competencies.</ListItem>
                <ListItem><strong>Idle User Nudge:</strong> An inactivity timer on the resume page triggers a scroll-to-top and a toast notification, playfully guiding users to discover the app specs easter egg.</ListItem>
                <ListItem><strong>Stateful UI:</strong> The app features a persistent light/dark theme, interactive modals, and a contact form, all managed with React state and hooks.</ListItem>
            </ul>
        </SpecSection>

        <SpecSection title="Key Features">
            <ul className="space-y-2">
                <ListItem><strong>Fully Responsive Design:</strong> Adapts seamlessly to all screen sizes, from mobile to desktop.</ListItem>
                <ListItem><strong>Interactive 3D Carousel:</strong> Users can navigate projects by clicking side cards, using arrow buttons, or with keyboard controls.</ListItem>
                <ListItem><strong>Static Project Data:</strong> Project data is imported directly as a JavaScript module for fast, reliable loading without network requests.</ListItem>
                <ListItem><strong>Dynamic PDF Generation:</strong> The resume can be downloaded as a PDF, generated on-the-fly in the browser to ensure it's always up-to-date with the latest information.</ListItem>
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