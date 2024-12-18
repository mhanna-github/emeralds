'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import both the CSS and Locomotive Scroll
    (async () => {
    
      
      // Import and initialize Locomotive Scroll
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
      } as any);

      return () => {
        scroll.destroy();
      };
    })();
  }, []);

  return <div data-scroll-container>{children}</div>;
} 