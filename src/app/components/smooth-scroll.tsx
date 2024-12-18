'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import both the CSS and Locomotive Scroll
    (async () => {
      // Import CSS
      await import('locomotive-scroll/dist/locomotive-scroll.css');
      
      // Import and initialize Locomotive Scroll
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    })();
  }, []);

  return <div data-scroll-container>{children}</div>;
} 