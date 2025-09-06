import React, { useRef, useEffect } from 'react';

interface ExecutiveSummaryProps {
  onShowSpecs: () => void;
  onShowToast: (message: string) => void;
}

const competencies = [
  { name: 'Product Management', style: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' },
  { name: 'Project Management', style: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' },
  { name: 'Digital Strategy', style: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300' },
  { name: 'Agile', style: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300' },
  { name: 'QA', style: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300' },
  { name: 'Web & Mobile Development', style: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300' },
  { name: 'AI', style: 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300' },
  { name: 'UI/UX', style: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300' },
  { name: 'CI/CD', style: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300' },
  { name: 'SDLC', style: 'bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-300' },
];

const CompetencyPills = () => (
  <>
    {competencies.map((comp) => (
      <span key={comp.name} className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full mx-2 ${comp.style}`}>
        {comp.name}
      </span>
    ))}
  </>
);

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ onShowSpecs, onShowToast }) => {
  const clickTimestamps = useRef<number[]>([]);
  
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  // FIX: Initialize useRef with null to prevent "Expected 1 arguments, but got 0" error.
  const animationFrameId = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const container = marqueeContainerRef.current;
    if (!container) return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Respect user's motion preference and disable autoscroll
    }

    const scrollContent = () => {
      if (!isHoveringRef.current && !isDraggingRef.current) {
        container.scrollLeft += 0.5; // Autoscroll speed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId.current = requestAnimationFrame(scrollContent);
    };

    animationFrameId.current = requestAnimationFrame(scrollContent);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  const startDragging = (clientX: number) => {
    const container = marqueeContainerRef.current;
    if (!container) return;
    
    isDraggingRef.current = true;
    startXRef.current = clientX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
    container.style.scrollBehavior = 'auto';
    container.style.userSelect = 'none';
  };

  const onDragging = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const container = marqueeContainerRef.current;
    if (!container) return;
    
    const x = clientX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed multiplier
    let newScrollLeft = scrollLeftRef.current - walk;
    
    const halfWidth = container.scrollWidth / 2;
    
    // Seamlessly loop the content during drag
    if (newScrollLeft >= halfWidth) {
        scrollLeftRef.current -= halfWidth;
        newScrollLeft -= halfWidth;
    } else if (newScrollLeft <= 0 && walk > 0) { // Check walk to prevent wrapping when starting drag at 0
        scrollLeftRef.current += halfWidth;
        newScrollLeft += halfWidth;
    }

    container.scrollLeft = newScrollLeft;
  };
  
  const stopDragging = () => {
    isDraggingRef.current = false;
    const container = marqueeContainerRef.current;
    if (container) {
      container.style.scrollBehavior = 'smooth';
      container.style.userSelect = 'auto';
    }
  };
  
  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => startDragging(e.pageX);
  const handleMouseMove = (e: React.MouseEvent) => { if(isDraggingRef.current) { e.preventDefault(); onDragging(e.pageX); } };
  const handleMouseUp = () => stopDragging();
  // FIX: Combined logic for stopping dragging and setting hover state into a single handler to resolve duplicate prop error.
  const handleMouseLeave = () => {
    stopDragging();
    isHoveringRef.current = false;
  };
  
  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => startDragging(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => { if(isDraggingRef.current) { onDragging(e.touches[0].clientX); } };
  const handleTouchEnd = () => stopDragging();

  const handleImageClick = () => {
    const now = Date.now();
    
    // Filter out clicks older than 1.5 seconds to define the "sequence" window.
    const recentTimestamps = clickTimestamps.current.filter(
      (timestamp) => now - timestamp < 1500
    );

    recentTimestamps.push(now);
    clickTimestamps.current = recentTimestamps;

    const clickCount = recentTimestamps.length;

    if (clickCount === 1) {
      onShowToast("Tap two more times to see the app's tech specs!");
    } else if (clickCount === 2) {
      onShowToast("Tap one more time!");
    } else if (clickCount >= 3) {
      onShowSpecs();
      clickTimestamps.current = []; // Reset after success
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <button onClick={handleImageClick} className="rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/50" aria-label="Show app specifications easter egg">
            <img
              className="h-40 w-40 rounded-full object-cover shadow-lg border-4 border-zinc-200 dark:border-blue-500 cursor-pointer"
              src="https://media.licdn.com/dms/image/v2/D4E03AQH2PbjlUdTZHg/profile-displayphoto-scale_400_400/B4EZkhMrKdGUAg-/0/1757198596649?e=1759968000&v=beta&t=iP_xv-4kwI0frMZ6nL1QXBNVdXfsMEAgqvg9rtE-pw0"
              alt="Profile portrait of Alejandro Ubilla"
            />
          </button>
        </div>
        <div className="flex-grow w-full overflow-hidden">
          <div className="flex flex-col">
            <div className="mb-6 text-center">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-300 mb-3">At a Glance:</h3>
              <div 
                ref={marqueeContainerRef}
                className="relative flex overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => (isHoveringRef.current = true)}
              >
                  <div className="flex">
                      <CompetencyPills />
                      <CompetencyPills aria-hidden="true" />
                  </div>
              </div>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed">
              Technology Leader with 15+ years of experience defining strategic roadmaps and leading high-performing teams. I bridge the gap between complex technology and human understanding, specializing in initiatives that improve product quality and leverage AI to drive business growth. My focus is on continuous improvement and delivering exceptional customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;